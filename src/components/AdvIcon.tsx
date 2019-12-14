import React from 'react'
import { Adv } from './types'

const FULL_SIZE = 160

type Props = {
  adv: Adv
  size?: number
}

const AdvIcon: React.FC<Props> = ({ adv, size }) => {
  size = size || FULL_SIZE
  return (
    <img
      src={`${process.env.PUBLIC_URL}/img/adv/${adv.img}`}
      width={size}
      height={size}
      alt={adv.name}
    />
  )
}

export default AdvIcon
