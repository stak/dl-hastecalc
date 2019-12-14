import React from 'react'
import { Adv } from '../types'
import AdvIcon from './AdvIcon'

type Props = {
  adv: Adv
}

const SelectorResult: React.FC<Props> = ({ adv }) => {
  return (
    <div className="SelectorResult">
      <AdvIcon adv={adv} size={80} />
    </div>
  )
}

export default SelectorResult
