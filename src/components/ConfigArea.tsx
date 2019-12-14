import React from 'react'
import { Adv } from '../types'
import { Config } from '../types'

import './ConfigArea.css'

type Props = {
  adv: Adv
  config: Config
  setConfig: React.Dispatch<React.SetStateAction<Config>>
}

const ConfigArea: React.FC<Props> = ({ adv, config, setConfig }) => {
  return (
    <div className="ConfigArea">
      <input id="totalHaste" type="text" value={config.haste} />
      <button
        onClick={() => {
          setConfig(prev => ({ ...prev, haste: prev.haste + 1 }))
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setConfig(prev => ({ ...prev, haste: prev.haste - 1 }))
        }}
      >
        -
      </button>
    </div>
  )
}

export default ConfigArea
