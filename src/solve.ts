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
      str: `c${i}`,
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
      str: combo.str + '_',
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
      str: combo.str + 'fs',
      actions: [...combo.actions, 'fs'],
      before: combo.before + rollLatency + config.latencyFS + 1,
      after: base.fs.recovery,
      gain: combo.gain + base.fs.sp
    }
  })
}

export function solveFastestComboToSP(sp: number, config: Config): ComboData {
  const baseData = weaponCombos[config.weapon]
  let combos: ComboCandidate[] = []
  combos = [...combos, ...makeStdCombo(baseData)]
  if (config.useFSF) {
    combos = [...combos, ...makeFsfCombo(baseData, config)]
  }
  if (config.useFS) {
    combos = [...combos, ...makeFsCombo(baseData, config)]
  }
  console.log(combos)

  const minTime: number[] = Array(sp + 1)
  const memoTime: number[] = Array(sp + 1)
  const memoCombo: string[] = Array(sp + 1)
  minTime[0] = 0
  memoTime[0] = 0
  memoCombo[0] = ''
  for (let i = 1; i <= sp; ++i) {
    const timeList = combos.map(
      combo =>
        (i >= combo.gain ? memoTime[i - combo.gain] : memoTime[0]) +
        combo.before
    )
    const min = Math.min.apply(null, timeList)
    const winners = combos.filter((_, i) => timeList[i] === min)
    const winner =
      i === sp
        ? winners.sort((a, b) => a.actions.length - b.actions.length)[0]
        : winners.sort((a, b) => a.after - b.after)[0]
    minTime[i] = min
    memoTime[i] = min + winner.after
    memoCombo[i] =
      (i - winner.gain > 0 ? memoCombo[i - winner.gain] + ' ' : memoCombo[0]) +
      winner.str
  }

  return {
    time: minTime[sp],
    str: memoCombo[sp],
    actions: memoCombo[sp].split(' ').reduce<Action[]>((cur, comboName) => {
      const comboAction = combos.find(combo => combo.str === comboName)?.actions
      return comboAction ? [...cur, ...comboAction] : cur
    }, []),
    detail: [] // TODO:
  }
}
