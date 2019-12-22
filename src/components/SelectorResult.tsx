import React from 'react'
import { Adv } from '../types'
import AdvIcon from './AdvIcon'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

type Props = {
  adv: Adv
}

const SelectorResult: React.FC<Props> = ({ adv }) => {
  return (
    <>
      <ListItemIcon>
        <AdvIcon adv={adv} size={80} />
      </ListItemIcon>
      <ListItemText primary={adv.en} secondary={adv.ja} />
    </>
  )
}

export default SelectorResult
