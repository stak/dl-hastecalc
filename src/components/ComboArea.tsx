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
  const results = {
    s1: solveFastestComboToSP(adv.s1.sp, config),
    s2: solveFastestComboToSP(adv.s2.sp, config)
  }
  return (
    <Paper className={classes.trans}>
      <ComboResult title="s1" result={results.s1} />
      <ComboResult title="s2" result={results.s2} />
    </Paper>
  )
}

export default ComboArea
