import React from 'react'
import { ComboData } from '../types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    width: '100%',
    marginTop: '1em',
    borderRadius: 0,
    boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.3)'
  },
  header: {
    paddingTop: '0.2em',
    paddingBottom: '0.3em',
    backgroundColor: 'rgba(0,0,0,0.14)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  combo: {
    fontFamily: 'Voces',
    fontSize: '16pt'
  }
})

type Props = {
  title: string
  result: ComboData
}

const ComboResult: React.FC<Props> = ({ title, result }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent className={classes.header}>
        <Typography component="h4" variant="h6">
          {title}
        </Typography>
        <Typography component="h5" variant="body1">
          {result.time} frames
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component="span" className={classes.combo}>
          {result.str}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ComboResult
