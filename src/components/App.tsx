import React, { useState } from 'react'
import CharData from './CharData'
import CharSelector from './CharSelector'

import './App.css'

const App: React.FC = () => {
  const [char, setChar] = useState('')

  return (
    <div className="App">
      <header>
        <h1>DRAGALIA LOST sp sim</h1>
      </header>
      <CharSelector
        onChange={selectedChar => {
          setChar(selectedChar)
        }}
      />
      <CharData name={char} />
    </div>
  )
}

export default App
