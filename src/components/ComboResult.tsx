import React from 'react'
import { ComboData } from '../types'

type Props = {
  result: ComboData
}

const ComboResult: React.FC<Props> = ({ result }) => {
  return (
    <div className="ComboResult">
      <div>{result.str}</div>total: {result.time} frames
    </div>
  )
}

export default ComboResult
