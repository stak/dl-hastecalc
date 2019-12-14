import React, { useState } from 'react'
import SelectorArea from './SelectorArea'
import ConfigArea from './ConfigArea'
import advData from '../data/adv'

import './App.css'

const App: React.FC = () => {
  const [activeAdv, setActiveAdv] = useState(advData[0])

  return (
    <div className="App">
      <header>
        <h1>DRAGALIA LOST sp sim</h1>
      </header>
      <SelectorArea all={advData} onChange={setActiveAdv} />
      <ConfigArea adv={activeAdv} />
    </div>
  )
}

export default App
