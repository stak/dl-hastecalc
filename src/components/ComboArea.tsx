import React from 'react'
import ComboResult from './ComboResult'
import { Adv } from '../types'
import { Config } from '../types'
import { ComboData } from '../types'
import './ComboArea.css'

import weaponCombos from '../data/combo'

function calcFastestComboToSP(sp: number, config: Config): ComboData {
  console.log('---')

  const combo = weaponCombos[config.weapon]
  const c = [
    {
      str: '',
      before: 0,
      after: 0,
      gain: 0
    }
  ]
  for (let i = 1; i <= 5; ++i) {
    const action = `x${i}`
    c[i] = {
      str: `c${i}`,
      before: c[i - 1].before + c[i - 1].after + combo[action].startup,
      after: combo[action].recovery,
      gain: c[i - 1].gain + combo[action].sp
    }
  }
  console.log(c)

  const minTime = Array(sp + 1)
  const memoTime = Array(sp + 1)
  const memoCombo = Array(sp + 1)
  minTime[0] = 0
  memoTime[0] = 0
  memoCombo[0] = []
  for (let i = 1; i <= sp; ++i) {
    const candidates = [c[1], c[2], c[3], c[4], c[5]]
    const times = candidates.map(
      c => (i >= c.gain ? memoTime[i - c.gain] : memoTime[0]) + c.before
    )
    const min = Math.min.apply(null, times)
    const winner = candidates[times.findIndex(v => v === min)]
    minTime[i] = min
    memoTime[i] = min + winner.after
    memoCombo[i] =
      (i >= winner.gain ? memoCombo[i - winner.gain] : memoCombo[0]) +
      winner.str
  }
  console.log(minTime)
  console.log(memoCombo)

  return {
    time: combo.x1.startup + combo.x1.recovery,
    str: 'c5 fs c4 fs',
    actions: ['x1', 'x2', 'x3', 'x4', 'x5', 'fs', 'x1', 'x2', 'x3', 'x4', 'fs'],
    detail: [
      {
        action: 'x1',
        currentSP: 0,
        gainSP: 130,
        currentTime: 0,
        spendTime: 33
      }
    ]
  }
}

type Props = {
  adv: Adv
  config: Config
}

const ComboArea: React.FC<Props> = ({ adv, config }) => {
  const results = {
    s1: calcFastestComboToSP(adv.s1.sp, config),
    s2: calcFastestComboToSP(adv.s2.sp, config)
  }
  return (
    <div className="ComboArea">
      <h2>s1</h2>
      <ComboResult result={results.s1} />
      <h2>s2</h2>
      <ComboResult result={results.s2} />
    </div>
  )
}

export default ComboArea
