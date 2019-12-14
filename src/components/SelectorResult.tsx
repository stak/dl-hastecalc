import React from 'react'
import { Adv } from './types'
import './SelectorResult.css'

type Props = {
  adv: Adv
}

const SelectorResult: React.FC<Props> = ({ adv }) => {
  return (
    <li className="SelectorResult">
      <img
        src={`${process.env.PUBLIC_URL}/img/adv/${adv.img}`}
        width="80"
        height="80"
        alt={adv.name}
      />
    </li>
  )
}

export default SelectorResult
