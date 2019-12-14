import React, { useState } from 'react'
import AdvArea from './AdvArea'
import SelectorArea from './SelectorArea'
import ConfigArea from './ConfigArea'
import ComboArea from './ComboArea'
import advData from '../data/adv'
import { Adv } from '../types'
import { Config } from '../types'

import './App.css'

const initialConfig: Config = {
  weapon: advData[0].weapon,
  prep: 0,
  haste: 0,
  hasteFS: 0,
  useFS: true,
  useFSC: true,
  latencyFS: 0,
  latencyFSC: 0
}

const App: React.FC = () => {
  const [activeAdv, setActiveAdv] = useState(advData[0])
  const [config, setConfig] = useState(initialConfig)

  return (
    <div className="App">
      <header>
        <h1>DRAGALIA LOST sp sim</h1>
      </header>
      <SelectorArea
        all={advData}
        onChange={(adv: Adv) => {
          setActiveAdv(adv)
          setConfig(prev => ({ ...prev, weapon: adv.weapon }))
        }}
      />
      <AdvArea adv={activeAdv} />
      <ConfigArea adv={activeAdv} config={config} setConfig={setConfig} />
      <ComboArea adv={activeAdv} config={config} />
    </div>
  )
}

export default App
