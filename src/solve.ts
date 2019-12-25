import weaponCombos from './data/combo'
import { Config, ComboData, ComboBase, Action } from './types'

interface ComboCandidate {
  str: string
  actions: Action[]
  before: number
  after: number
  gain: number
}

const FRAME_TO_STOP_COMBO = 100
const FRAME_TO_ROLL = 5

function makeStdCombo(base: ComboBase): ComboCandidate[] {
  const rv: ComboCandidate[] = []
  const c: ComboCandidate[] = [
    {
      str: '',
      actions: [],
      before: 0,
      after: 0,
      gain: 0
    }
  ]
  for (let i = 1; i <= 5; ++i) {
    const action = `x${i}` as Action
    c[i] = {
      str: `c${i}_`,
      actions: [...c[i - 1].actions, action],
      before: c[i - 1].before + c[i - 1].after + base[action].startup,
      after: base[action].recovery,
      gain: c[i - 1].gain + base[action].sp
    }
    rv.push(c[i])
  }
  for (let i = 1; i <= 4; ++i) {
    c[i].after += FRAME_TO_STOP_COMBO
  }
  return rv
}

function makeFsfCombo(base: ComboBase, config: Config): ComboCandidate[] {
  /*
   tap                         x1
    |<------x1.startup-------->|<----rollLatency---->|
    |<--FRAME_TO_ROLL-->|<-------fsf.startup-------->|<-latencyFSF-><---fsf.recovery--->|
                       tap and hold                 release(fsf)
  */

  return makeStdCombo(base).map((combo, i) => {
    const rollLatency =
      (i + 1) * FRAME_TO_ROLL + base.fsf.startup > combo.before
        ? (i + 1) * FRAME_TO_ROLL + base.fsf.startup - combo.before
        : 0
    return {
      ...combo,
      str: combo.str.slice(0, -1),
      after: rollLatency + config.latencyFSF + base.fsf.recovery,
      actions: [...combo.actions, 'fsf']
    }
  })
}

function makeFsCombo(base: ComboBase, config: Config): ComboCandidate[] {
  /*
   tap                         x1
    |<------x1.startup-------->|<----rollLatency---->|
    |<--FRAME_TO_ROLL-->|<--------fs.startup-------->|<-latencyFS-><---fs.recovery--->|
                       tap and hold                 release(fs)
  */

  return makeStdCombo(base).map((combo, i) => {
    const rollLatency =
      (i + 1) * FRAME_TO_ROLL + base.fs.startup > combo.before
        ? (i + 1) * FRAME_TO_ROLL + base.fs.startup - combo.before
        : 0
    return {
      str: combo.str.slice(0, -1) + 'fs',
      actions: [...combo.actions, 'fs'],
      before: combo.before + rollLatency + config.latencyFS + 1,
      after: base.fs.recovery,
      gain: combo.gain + base.fs.sp
    }
  })
}

function addHaste(base: ComboBase, config: Config): ComboBase {
  let hasted: ComboBase = Object.assign({}, base)

  const actions: Action[] = ['x1', 'x2', 'x3', 'x4', 'x5', 'fs']

  for (let [k, v] of Object.entries(base)) {
    if (actions.find(a => a === k)) {
      const composedHaste =
        k !== 'fs' ? config.haste : config.haste + config.hasteFS

      hasted[k as Action] = {
        ...v,
        sp: Math.ceil((v.sp * (100 + composedHaste)) / 100)
      }
    } else {
      hasted[k as Action] = v
    }
  }

  return hasted
}

export function solveFastestComboToSP(sp: number, config: Config): ComboData {
  const baseData = weaponCombos[config.weapon]
  const hastedData = addHaste(baseData, config)

  let combos: ComboCandidate[] = []
  combos = [...combos, ...makeStdCombo(hastedData)]
  if (config.useFSF) {
    combos = [...combos, ...makeFsfCombo(hastedData, config)]
  }
  if (config.useFS) {
    combos = [...combos, ...makeFsCombo(hastedData, config)]
  }

  const freeTime: number[] = Array(sp + 1)
  const memoCombo: string[] = Array(sp + 1)
  freeTime[0] = 0
  memoCombo[0] = ''

  for (let i = 1; i < sp; ++i) {
    let minFreeTime = Infinity
    let freeWinner = combos[0]
    for (let j = 0; j < combos.length; ++j) {
      const combo = combos[j]
      const t =
        (i >= combo.gain ? freeTime[i - combo.gain] : 0) +
        combo.before +
        combo.after
      if (t < minFreeTime) {
        minFreeTime = t
        freeWinner = combo
      }
    }
    freeTime[i] = minFreeTime
    memoCombo[i] =
      (i - freeWinner.gain > 0
        ? memoCombo[i - freeWinner.gain] + ' '
        : memoCombo[0]) + freeWinner.str
  }

  const reachTimeCandidates: number[] = combos.map(
    combo =>
      (sp >= combo.gain ? freeTime[sp - combo.gain] : freeTime[0]) +
      combo.before
  )
  const minReachTime = Math.min.apply(null, reachTimeCandidates)
  const reachWinners = combos.filter(
    (_, i) => reachTimeCandidates[i] === minReachTime
  )
  const reachWinner = reachWinners.sort(
    (a, b) => a.actions.length - b.actions.length
  )[0]
  const reachCombo =
    (sp - reachWinner.gain > 0
      ? memoCombo[sp - reachWinner.gain] + ' '
      : memoCombo[0]) + reachWinner.str

  return {
    time: minReachTime,
    str: reachCombo,
    actions: reachCombo.split(' ').reduce<Action[]>((cur, comboName) => {
      const comboAction = combos.find(combo => combo.str === comboName)?.actions
      return comboAction ? [...cur, ...comboAction] : cur
    }, []),
    detail: [] // TODO:
  }
}
