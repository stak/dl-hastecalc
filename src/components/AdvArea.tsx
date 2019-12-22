import React from 'react'
import { Adv } from '../types'
import AdvIcon from './AdvIcon'
import './AdvArea.css'

type Props = {
  adv: Adv
  size?: number
}

const AdvArea: React.FC<Props> = ({ adv }) => {
  return (
    <div className="AdvArea">
      <div style={{ float: 'left' }}>
        <AdvIcon adv={adv} />
      </div>
      <div>{adv.ja}</div>
      <div>{adv.element}</div>
      <div>{adv.weapon}</div>
      <div>
        s1: {adv.s1.ja} {adv.s1.sp}
      </div>
      <div>
        s2: {adv.s2.ja} {adv.s2.sp}
      </div>
    </div>
  )
}

export default AdvArea
