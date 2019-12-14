import React from 'react'
import { Adv } from '../types'
import AdvData from './AdvData'

import './ConfigArea.css'

type Props = {
  adv: Adv
}

const ConfigArea: React.FC<Props> = ({ adv }) => {
  return (
    <div className="ConfigArea">
      <AdvData adv={adv} />
    </div>
  )
}

export default ConfigArea
