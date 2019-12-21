import React from 'react'
import ComboResult from './ComboResult'
import { Adv } from '../types'
import { Config } from '../types'
import { solveFastestComboToSP } from '../solve'
import './ComboArea.css'

type Props = {
  adv: Adv
  config: Config
}

const ComboArea: React.FC<Props> = ({ adv, config }) => {
  const results = {
    s1: solveFastestComboToSP(adv.s1.sp, config),
    s2: solveFastestComboToSP(adv.s2.sp, config)
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
