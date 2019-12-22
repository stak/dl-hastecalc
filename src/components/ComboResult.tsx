import React from 'react'
import { ComboData } from '../types'

type Props = {
  result: ComboData
}

const ComboResult: React.FC<Props> = ({ result }) => {
  return (
    <div>
      <div>{result.str}</div>
      <div>total: {result.time} frames</div>
    </div>
  )
}

export default ComboResult
