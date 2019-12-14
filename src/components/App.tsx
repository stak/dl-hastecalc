import React, { useState } from 'react'
import ConfigArea from './ConfigArea'
import SelectorResults from './SelectorResults'
import { Adv } from './types'

import './App.css'

const testAdvs: Adv[] = [
  {
    name: 'ナッツ',
    img: 'natalie.png',
    elemental: 'shadow',
    weapon: 'blade',
    s1: {
      name: 'Defiant Dance',
      img: '',
      sp: 3247
    },
    s2: {
      name: 'Clean State',
      img: '',
      sp: 6000
    },
    haste: 0
  },
  {
    name: 'ユーディル',
    img: 'euden.png',
    elemental: 'flame',
    weapon: 'sword',
    s1: {
      name: 'Blazing Circlet',
      img: '',
      sp: 2376
    },
    s2: {
      name: 'Exalted Fire',
      img: '',
      sp: 4880
    },
    haste: 0
  },
  {
    name: 'フルル',
    img: 'fleur.png',
    elemental: 'light',
    weapon: 'dagger',
    s1: {
      name: 'Captivating Canvas',
      img: '',
      sp: 3478
    },
    s2: {
      name: 'Palette Punch',
      img: '',
      sp: 5934
    },
    haste: 8
  }
]

const App: React.FC = () => {
  const [activeAdv, setActiveAdv] = useState(testAdvs[0])

  return (
    <div className="App">
      <header>
        <h1>DRAGALIA LOST sp sim</h1>
      </header>
      <SelectorResults all={testAdvs} onChange={setActiveAdv} />
      <ConfigArea adv={activeAdv} />
    </div>
  )
}

export default App
