import React from 'react'
import { Adv } from '../types'
import AdvIcon from './AdvIcon'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    borderRadius: 0,
    boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.3)'
  },
  icon: {
    flex: '0 0 auto',
    width: '150px',
    margin: '-10px 0px -16px -10px',
    overflow: 'hidden'
  },
  content: {
    flex: '1 0 auto'
  }
})

type Props = {
  adv: Adv
  size?: number
}

const AdvArea: React.FC<Props> = ({ adv }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <div className={classes.icon}>
        <AdvIcon adv={adv} />
      </div>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {adv.en} / {adv.ja}
        </Typography>
        <Typography component="h6" variant="body1">
          s1: {adv.s1.ja} {adv.s1.sp}
        </Typography>
        <Typography component="h6" variant="body1">
          s2: {adv.s2.ja} {adv.s2.sp}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AdvArea
