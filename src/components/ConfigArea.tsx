import React from 'react'
import { Adv } from '../types'
import { Config } from '../types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const marks = {
  wyrmprintHaste: [
    {
      value: 0,
      label: '0%'
    },
    {
      value: 6,
      label: '6%'
    },
    {
      value: 8,
      label: '8%'
    },
    {
      value: 15,
      label: '15%'
    }
  ],
  wyrmprintStrike: [
    {
      value: 0,
      label: '0%'
    },
    {
      value: 10,
      label: '10%'
    },
    {
      value: 12,
      label: '12%'
    },
    {
      value: 15,
      label: '15%'
    }
  ],
  dragonHaste: [
    {
      value: 0,
      label: '0%'
    },
    {
      value: 25,
      label: '25%'
    },
    {
      value: 35,
      label: '35%'
    }
  ],
  weaponHaste: [
    {
      value: 0,
      label: '0%'
    },
    {
      value: 4,
      label: '4%'
    },
    {
      value: 5,
      label: '5%'
    }
  ],
  advHaste: [
    {
      value: 0,
      label: '0%'
    },
    {
      value: 5,
      label: '5%'
    },
    {
      value: 8,
      label: '8%'
    },
    {
      value: 10,
      label: '10%'
    },
    {
      value: 15,
      label: '15%'
    }
  ],
  advStrike: [
    {
      value: 0,
      label: '0%'
    },
    {
      value: 12,
      label: '12%'
    },
    {
      value: 15,
      label: '15%'
    }
  ],
  buffHaste: [
    {
      value: 0,
      label: '0%'
    },
    {
      value: 10,
      label: '10%'
    },
    {
      value: 20,
      label: '20%'
    },
    {
      value: 30,
      label: '30%'
    },
    {
      value: 40,
      label: '40%'
    },
    {
      value: 50,
      label: '50%'
    }
  ]
}

const useStyles = makeStyles({
  config: {
    display: 'flex',
    padding: '0.5em 0.2em',
    marginTop: '1em',
    borderRadius: 0,
    boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.3)',
    maxHeight: 'calc(100vh - 240px)',
    overflowY: 'auto'
  },
  configMobile: {
    display: 'flex',
    padding: '0.5em 0.2em',
    marginTop: '1em',
    borderRadius: 0,
    boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.3)'
  },
  formGroup: {
    display: 'block',
    width: '100%',
    marginLeft: '2em',
    marginRight: '2em'
  },
  sliders: {
    padding: '0 10px 0 10px'
  },
  divider: {
    margin: '4px 0 6px 0'
  }
})

type Props = {
  adv: Adv
  config: Config
  setConfig: React.Dispatch<React.SetStateAction<Config>>
}

const ConfigArea: React.FC<Props> = ({ adv, config, setConfig }) => {
  const classes = useStyles()
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))
  const listClass = isMobile ? classes['configMobile'] : classes['config']

  return (
    <Paper className={listClass}>
      <FormGroup className={classes.formGroup}>
        <FormControlLabel
          control={<Checkbox checked={true} onChange={() => {}} />}
          label="Use FS / バーストあり"
        />
        <FormControlLabel
          control={<Checkbox checked={true} onChange={() => {}} />}
          label="Use FSF / バーストキャンセルあり"
        />
        <Divider variant="middle" className={classes.divider} />
        <Grid container>
          <Grid item xs={9}>
            <Typography gutterBottom component="h4" variant="body1">
              Skill Haste{' '}
              <Typography
                gutterBottom
                component="span"
                variant="body2"
                color="textSecondary"
              >
                スキルブースト
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography gutterBottom component="h4" variant="h5" align="right">
              23%
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3} className={classes.sliders}>
            <Typography gutterBottom align="right">
              Wyrmprint
            </Typography>
          </Grid>
          <Grid item xs={9} className={classes.sliders}>
            <Slider
              defaultValue={0}
              max={15}
              step={1}
              valueLabelDisplay="auto"
              marks={marks.wyrmprintHaste}
            />
          </Grid>
          <Grid item xs={3} className={classes.sliders}>
            <Typography gutterBottom align="right">
              Co-ability
            </Typography>
          </Grid>
          <Grid item xs={9} className={classes.sliders}>
            <Slider
              defaultValue={0}
              max={15}
              step={1}
              valueLabelDisplay="auto"
              marks={marks.advHaste}
            />
          </Grid>
          <Grid item xs={3} className={classes.sliders}>
            <Typography gutterBottom align="right">
              Dragon
            </Typography>
          </Grid>
          <Grid item xs={9} className={classes.sliders}>
            <Slider
              defaultValue={0}
              max={35}
              step={null}
              valueLabelDisplay="auto"
              marks={marks.dragonHaste}
            />
          </Grid>
          <Grid item xs={3} className={classes.sliders}>
            <Typography gutterBottom align="right">
              Weapon
            </Typography>
          </Grid>
          <Grid item xs={9} className={classes.sliders}>
            <Slider
              defaultValue={0}
              max={5}
              step={null}
              valueLabelDisplay="auto"
              marks={marks.weaponHaste}
            />
          </Grid>
          <Grid item xs={3} className={classes.sliders}>
            <Typography gutterBottom align="right">
              Adv
            </Typography>
          </Grid>
          <Grid item xs={9} className={classes.sliders}>
            <Slider
              defaultValue={0}
              max={15}
              step={1}
              valueLabelDisplay="auto"
              marks={marks.advHaste}
            />
          </Grid>
          <Grid item xs={3} className={classes.sliders}>
            <Typography gutterBottom align="right">
              Buff
            </Typography>
          </Grid>
          <Grid item xs={9} className={classes.sliders}>
            <Slider
              defaultValue={0}
              max={50}
              step={1}
              valueLabelDisplay="auto"
              marks={marks.buffHaste}
            />
          </Grid>
        </Grid>

        <Divider variant="middle" className={classes.divider} />
        <Grid container>
          <Grid item xs={9}>
            <Typography gutterBottom component="h4" variant="body1">
              Striking Haste{' '}
              <Typography
                gutterBottom
                component="span"
                variant="body2"
                color="textSecondary"
              >
                スキルブースト・強撃
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography gutterBottom component="h4" variant="h5" align="right">
              0%
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3} className={classes.sliders}>
            <Typography gutterBottom>Wyrmprint</Typography>
          </Grid>
          <Grid item xs={9} className={classes.sliders}>
            <Slider
              defaultValue={0}
              max={15}
              step={1}
              valueLabelDisplay="auto"
              marks={marks.wyrmprintStrike}
            />
          </Grid>
          <Grid item xs={3} className={classes.sliders}>
            <Typography gutterBottom>Adv</Typography>
          </Grid>
          <Grid item xs={9} className={classes.sliders}>
            <Slider
              defaultValue={0}
              max={15}
              step={1}
              valueLabelDisplay="auto"
              marks={marks.advStrike}
            />
          </Grid>
        </Grid>
      </FormGroup>
    </Paper>
  )
  /*
      <div>
        Skill Haste{' '}
        <input id="skillHaste" type="text" value={config.haste} readOnly />
        <button
          onClick={() => {
            setConfig(prev => ({ ...prev, haste: prev.haste + 1 }))
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setConfig(prev => ({ ...prev, haste: prev.haste - 1 }))
          }}
        >
          -
        </button>
      </div>
      <div>
        Striking Haste{' '}
        <input id="strikingHaste" type="text" value={config.hasteFS} readOnly />
        <button
          onClick={() => {
            setConfig(prev => ({ ...prev, hasteFS: prev.hasteFS + 1 }))
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setConfig(prev => ({ ...prev, hasteFS: prev.hasteFS - 1 }))
          }}
        >
          -
        </button>
      </div>
      */
}

export default ConfigArea
