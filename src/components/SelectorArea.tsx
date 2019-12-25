import React, { useState } from 'react'
import SelectorResults from './SelectorResults'
import img from '../img'
import { Adv, Weapon, Element, Stars } from '../types'
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

type Props = {
  all: Adv[]
  onAdvChange: (adv: Adv) => void
}

const useStyles = makeStyles({
  toggleGroup: {
    display: 'flex',
    marginBottom: '0px'
  },
  grow: {
    flexGrow: 1,
    minWidth: 0,
    border: 0,
    height: '46px'
  },
  filter: {
    borderRadius: 0,
    boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.3)',
    marginBottom: '1em',
    marginTop: '2px'
  },
  result: {
    borderRadius: 0,
    boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.3)',
    marginBottom: '1em'
  }
})

function filterAdvs(
  all: Adv[],
  element: Element[],
  weapon: Weapon[],
  stars: Stars[]
): Adv[] {
  let result = all
  if (element.length) {
    result = result.filter(adv => element.indexOf(adv.element) >= 0)
  }
  if (weapon.length) {
    result = result.filter(adv => weapon.indexOf(adv.weapon) >= 0)
  }
  if (stars.length) {
    result = result.filter(adv => stars.indexOf(adv.stars) >= 0)
  }
  return result
}

const SelectorArea: React.FC<Props> = ({ all, onAdvChange }) => {
  const [filtered, setFiltered] = useState(all)
  const [condStars, setCondStars] = useState<Stars[]>([])
  const [condElement, setCondElement] = useState<Element[]>([])
  const [condWeapon, setCondWeapon] = useState<Weapon[]>([])

  const handleStars = (_: any, stars: Stars[]) => {
    setCondStars(stars)
    setFiltered(filterAdvs(all, condElement, condWeapon, stars))
  }
  const handleElement = (_: any, element: Element[]) => {
    setCondElement(element)
    setFiltered(filterAdvs(all, element, condWeapon, condStars))
  }
  const handleWeapon = (_: any, weapon: Weapon[]) => {
    setCondWeapon(weapon)
    setFiltered(filterAdvs(all, condElement, weapon, condStars))
  }

  const classes = useStyles()

  return (
    <>
      <Paper className={classes.filter}>
        <ToggleButtonGroup
          value={condStars}
          onChange={handleStars}
          size="small"
          className={classes.toggleGroup}
        >
          <ToggleButton value="3" className={classes.grow}>
            <img src={img.stars[3]} width="32" height="32" alt="★★★☆☆" />
          </ToggleButton>
          <ToggleButton value="4" className={classes.grow}>
            <img src={img.stars[4]} width="32" height="32" alt="★★★★☆" />
          </ToggleButton>
          <ToggleButton value="5" className={classes.grow}>
            <img src={img.stars[5]} width="32" height="32" alt="★★★★★" />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={condElement}
          onChange={handleElement}
          size="small"
          className={classes.toggleGroup}
        >
          <ToggleButton value="flame" className={classes.grow}>
            <img src={img.element.flame} width="29" height="29" alt="flame" />
          </ToggleButton>
          <ToggleButton value="water" className={classes.grow}>
            <img src={img.element.water} width="29" height="29" alt="water" />
          </ToggleButton>
          <ToggleButton value="wind" className={classes.grow}>
            <img src={img.element.wind} width="29" height="29" alt="wind" />
          </ToggleButton>
          <ToggleButton value="light" className={classes.grow}>
            <img src={img.element.light} width="29" height="29" alt="light" />
          </ToggleButton>
          <ToggleButton value="shadow" className={classes.grow}>
            <img src={img.element.shadow} width="29" height="29" alt="shadow" />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={condWeapon}
          onChange={handleWeapon}
          size="small"
          className={classes.toggleGroup}
        >
          <ToggleButton value="sword" className={classes.grow}>
            <img src={img.weapon.sword} width="29" height="29" alt="sword" />
          </ToggleButton>
          <ToggleButton value="blade" className={classes.grow}>
            <img src={img.weapon.blade} width="29" height="29" alt="blade" />
          </ToggleButton>
          <ToggleButton value="dagger" className={classes.grow}>
            <img src={img.weapon.dagger} width="29" height="29" alt="dagger" />
          </ToggleButton>
          <ToggleButton value="axe" className={classes.grow}>
            <img src={img.weapon.axe} width="29" height="29" alt="axe" />
          </ToggleButton>
          <ToggleButton value="lance" className={classes.grow}>
            <img src={img.weapon.lance} width="29" height="29" alt="lance" />
          </ToggleButton>
          <ToggleButton value="bow" className={classes.grow}>
            <img src={img.weapon.bow} width="29" height="29" alt="bow" />
          </ToggleButton>
          <ToggleButton value="wand" className={classes.grow}>
            <img src={img.weapon.wand} width="29" height="29" alt="wand" />
          </ToggleButton>
          <ToggleButton value="staff" className={classes.grow}>
            <img src={img.weapon.staff} width="29" height="29" alt="staff" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
      <Paper className={classes.result}>
        <SelectorResults advs={filtered} onChange={onAdvChange} />
      </Paper>
    </>
  )
}

export default SelectorArea
