import React from 'react'
import { Adv } from '../types'
import SelectorResults from './SelectorResults'
import './SelectorArea.css'

type Props = {
  all: Adv[]
  onChange: React.Dispatch<React.SetStateAction<Adv>>
}

const SelectorArea: React.FC<Props> = ({ all, onChange }) => {
  return (
    <div className="SelectorArea">
      <SelectorResults all={all} onChange={onChange} />
    </div>
  )
}

export default SelectorArea
