import React from 'react'
import { Adv } from './types'

type Props = {
  adv: Adv
}

const ConfigArea: React.FC<Props> = ({ adv }) => {
  return adv ? (
    <div className="ConfigArea">お名前: {adv.name}</div>
  ) : (
    <div className="ConfigArea"></div>
  )
}

export default ConfigArea
