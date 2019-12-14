import React from 'react'
import SelectorResult from './SelectorResult'
import { Adv } from './types'

type Props = {
  all: Adv[]
  onChange: (adv: Adv) => void
}

const SelectorResults: React.FC<Props> = ({ all, onChange }) => {
  return (
    <div className="SelectorResults">
      選べ
      <ul>
        {all.map(adv => (
          <button onClick={() => onChange(adv)}>
            <SelectorResult adv={adv} />
          </button>
        ))}
      </ul>
    </div>
  )
}

export default SelectorResults
