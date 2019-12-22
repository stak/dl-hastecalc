import React from 'react'
import { Adv } from '../types'
import { Config } from '../types'

type Props = {
  adv: Adv
  config: Config
  setConfig: React.Dispatch<React.SetStateAction<Config>>
}

const ConfigArea: React.FC<Props> = ({ adv, config, setConfig }) => {
  return (
    <div className="ConfigArea">
      <div>
        Skill Haste{' '}
        <input id="skillHaste" type="text" value={config.haste} readOnly />
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
      <div>
        Striking Haste{' '}
        <input id="strikingHaste" type="text" value={config.hasteFS} readOnly />
        <button
          onClick={() => {
            setConfig(prev => ({ ...prev, hasteFS: prev.hasteFS + 1 }))
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setConfig(prev => ({ ...prev, hasteFS: prev.hasteFS - 1 }))
          }}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default ConfigArea
