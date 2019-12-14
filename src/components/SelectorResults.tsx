import React from 'react'
import SelectorResult from './SelectorResult'
import { Adv } from '../types'

type Props = {
  all: Adv[]
  onChange: (adv: Adv) => void
}

const SelectorResults: React.FC<Props> = ({ all, onChange }) => {
  return (
    <ul className="SelectorResults">
      {all.map(adv => (
        <button
          key={adv.name + adv.elemental + adv.weapon}
          onClick={() => onChange(adv)}
        >
          <SelectorResult adv={adv} />
        </button>
      ))}
    </ul>
  )
}

export default SelectorResults
