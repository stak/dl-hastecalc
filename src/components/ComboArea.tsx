import React from 'react'
import ComboResult from './ComboResult'
import { Adv } from '../types'
import { Config } from '../types'
import { solveFastestComboToSP } from '../solve'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  trans: {
    background: 'transparent',
    marginTop: '1em',
    border: 0,
    boxShadow: '0 0 0'
  }
})

type Props = {
  adv: Adv
  config: Config
}

const ComboArea: React.FC<Props> = ({ adv, config }) => {
  const classes = useStyles()
  const results = []

  if (!adv.s1.exclude) {
    results.push({
      title: 's1',
      detail: solveFastestComboToSP(adv.s1.sp, config)
    })
  }
  if (!adv.s2.exclude) {
    results.push({
      title: 's2',
      detail: solveFastestComboToSP(adv.s2.sp, config)
    })
  }

  return (
    <Paper className={classes.trans}>
      {results.map(result => (
        <ComboResult
          key={result.title}
          title={result.title}
          result={result.detail}
        />
      ))}
    </Paper>
  )
}

export default ComboArea
