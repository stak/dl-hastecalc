import React from 'react'
import SelectorResult from './SelectorResult'
import { Adv } from '../types'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles(theme => ({
  list: {
    maxHeight: 'calc(100vh - 220px)',
    overflowY: 'scroll'
  },
  dense: {
    paddingTop: 0,
    paddingBottom: 0
  }
}))

type Props = {
  advs: Adv[]
  onChange: (adv: Adv) => void
}

const SelectorResults: React.FC<Props> = ({ advs, onChange }) => {
  const classes = useStyles()
  const [selectedAdv, setSelectedAdv] = React.useState(advs[0])

  return (
    <List component="nav" className={classes.list}>
      {advs.map(adv => (
        <ListItem
          key={adv.en}
          className={classes.dense}
          button
          dense
          disableGutters
          selected={selectedAdv === adv}
          onClick={() => {
            onChange(adv)
            setSelectedAdv(adv)
          }}
        >
          <SelectorResult adv={adv} />
        </ListItem>
      ))}
    </List>
  )
}

export default SelectorResults
