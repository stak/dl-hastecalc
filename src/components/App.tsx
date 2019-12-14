import React, { useState } from 'react'
import AdvArea from './AdvArea'
import SelectorArea from './SelectorArea'
import ConfigArea from './ConfigArea'
import advData from '../data/adv'
import { Config } from '../types'

import './App.css'

const defConfig: Config = {
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
  const [config, setConfig] = useState(defConfig)

  return (
    <div className="App">
      <header>
        <h1>DRAGALIA LOST sp sim</h1>
      </header>
      <SelectorArea all={advData} onChange={setActiveAdv} />
      <AdvArea adv={activeAdv} />
      <ConfigArea adv={activeAdv} config={config} setConfig={setConfig} />
    </div>
  )
}

export default App
