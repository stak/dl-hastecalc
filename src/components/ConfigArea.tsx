import React, { useState } from 'react'
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

type HasteName =
  | 'prints'
  | 'co'
  | 'dragon'
  | 'weapon'
  | 'adv'
  | 'buff'
  | 'advStrike'
  | 'printsStrike'
type MarkObject = {
  value: number
  label: string
}

const sliderOption: {
  [key in HasteName]: {
    label: string
    max: number
    step: number | null
    marks: MarkObject[]
  }
} = {
  prints: {
    label: 'Wyrmprints',
    max: 15,
    step: 1,
    marks: [
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
    ]
  },
  dragon: {
    label: 'Dragon',
    max: 35,
    step: null,
    marks: [
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
    ]
  },
  weapon: {
    label: 'Weapon',
    max: 5,
    step: null,
    marks: [
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
    ]
  },
  adv: {
    label: 'Adventurer',
    max: 15,
    step: 1,
    marks: [
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
    ]
  },
  buff: {
    label: 'Buff',
    max: 50,
    step: 1,
    marks: [
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
  },
  co: {
    label: 'Co-ability',
    max: 15,
    step: null,
    marks: [
      {
        value: 0,
        label: '0%'
      },
      {
        value: 2,
        label: '2%'
      },
      {
        value: 3,
        label: '3%'
      },
      {
        value: 5,
        label: '5%'
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
        value: 9,
        label: '9%'
      },
      {
        value: 11,
        label: '11%'
      },
      {
        value: 12,
        label: '12%'
      },
      {
        value: 15,
        label: '15%'
      }
    ]
  },
  advStrike: {
    label: 'Adventurer',
    max: 15,
    step: 1,
    marks: [
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
    ]
  },
  printsStrike: {
    label: 'Wyrmprints',
    max: 15,
    step: 1,
    marks: [
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
    ]
  }
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
  sliderLabel: {
    lineHeight: 2,
    textAlign: 'right'
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

type State = {
  [key in HasteName]: { value: number; setter: any }
}

const ConfigArea: React.FC<Props> = ({ adv, config, setConfig }) => {
  const classes = useStyles()
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))
  const listClass = isMobile ? classes['configMobile'] : classes['config']

  const hasteVars: HasteName[] = [
    'prints',
    'co',
    'dragon',
    'weapon',
    'adv',
    'buff',
    'advStrike',
    'printsStrike'
  ]
  const sliderState: State = {} as any
  for (let i = 0; i < hasteVars.length; ++i) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setter] = useState(0)
    sliderState[hasteVars[i]] = {
      value,
      setter
    }
  }

  const handleSliderChange = (
    varName: HasteName,
    event: any,
    newValue: number | number[]
  ) => {
    sliderState[varName].setter(newValue)
    setConfig({
      ...config,
      haste: calcTotalHaste({
        ...sliderState,
        [varName]: {
          value: newValue
        }
      }),
      hasteFS: calcTotalStrike({
        ...sliderState,
        [varName]: {
          value: newValue
        }
      })
    })
  }

  const calcTotalHaste = (state: State) =>
    hasteVars.reduce(
      (sum, varName) =>
        varName.indexOf('Strike') < 0 ? sum + state[varName].value : sum,
      0
    )
  const calcTotalStrike = (state: State) =>
    hasteVars.reduce(
      (sum, varName) =>
        varName.indexOf('Strike') >= 0 ? sum + state[varName].value : sum,
      0
    )

  return (
    <Paper className={listClass}>
      <FormGroup className={classes.formGroup}>
        <FormControlLabel
          control={
            <Checkbox
              checked={config.useFS}
              onChange={() => {
                setConfig({
                  ...config,
                  useFS: !config.useFS
                })
              }}
            />
          }
          label={
            <Typography variant="body1">
              Use FS{' '}
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                バースト使用
              </Typography>
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={config.useFSF}
              onChange={() => {
                setConfig({
                  ...config,
                  useFSF: !config.useFSF
                })
              }}
            />
          }
          label={
            <Typography variant="body1">
              Use FSF{' '}
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                バーストキャンセル使用
              </Typography>
            </Typography>
          }
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
              {calcTotalHaste(sliderState)}%
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          {hasteVars.map(varName => {
            if (varName.indexOf('Strike') >= 0) return null
            const state = sliderState[varName]
            const option = sliderOption[varName]

            return (
              <>
                <Grid item xs={3} className={classes.sliders}>
                  <Typography variant="body2" className={classes.sliderLabel}>
                    {option.label}
                  </Typography>
                </Grid>
                <Grid item xs={9} className={classes.sliders}>
                  <Slider
                    value={state.value}
                    max={option.max}
                    step={option.step}
                    valueLabelDisplay="auto"
                    marks={option.marks}
                    onChange={handleSliderChange.bind(null, varName)}
                  />
                </Grid>
              </>
            )
          })}
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
              {calcTotalStrike(sliderState)}%
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          {hasteVars.map(varName => {
            if (varName.indexOf('Strike') < 0) return null
            const state = sliderState[varName]
            const option = sliderOption[varName]

            return (
              <>
                <Grid item xs={3} className={classes.sliders}>
                  <Typography variant="body2" className={classes.sliderLabel}>
                    {option.label}
                  </Typography>
                </Grid>
                <Grid item xs={9} className={classes.sliders}>
                  <Slider
                    value={state.value}
                    max={option.max}
                    step={option.step}
                    valueLabelDisplay="auto"
                    marks={option.marks}
                    onChange={handleSliderChange.bind(null, varName)}
                  />
                </Grid>
              </>
            )
          })}
        </Grid>
      </FormGroup>
    </Paper>
  )
}

export default ConfigArea
