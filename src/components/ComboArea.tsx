import React from 'react'
import ComboResult from './ComboResult'
import { Adv } from '../types'
import { Config } from '../types'
import { ComboData } from '../types'
import './ComboArea.css'

import weaponCombos from '../data/combo'

function calcFastestComboToSP(sp: number, config: Config): ComboData {
  const combo = weaponCombos[config.weapon]

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
