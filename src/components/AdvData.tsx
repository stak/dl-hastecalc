import React from 'react'
import { Adv } from './types'
import AdvIcon from './AdvIcon'

type Props = {
  adv: Adv
  size?: number
}

const AdvData: React.FC<Props> = ({ adv }) => {
  return (
    <div className="AdvData">
      <div style={{ float: 'left' }}>
        <AdvIcon adv={adv} />
      </div>
      <div>{adv.name}</div>
      <div>{adv.elemental}</div>
      <div>{adv.weapon}</div>
      <div>
        s1: {adv.s1.name} {adv.s1.sp}
      </div>
      <div>
        s2: {adv.s2.name} {adv.s2.sp}
      </div>
    </div>
  )
}

export default AdvData
