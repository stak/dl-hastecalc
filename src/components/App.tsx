import React, { useState } from 'react'
import AdvArea from './AdvArea'
import SelectorArea from './SelectorArea'
import ConfigArea from './ConfigArea'
import ComboArea from './ComboArea'
import advData from '../data/adv'
import { Adv } from '../types'
import { Config } from '../types'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { ThemeProvider } from '@material-ui/core/styles'

import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f0f0f0'
    }
  }
})
const useStyles = makeStyles({
  header: {
    backgroundColor: '#fafafa',
    marginBottom: '1em'
  },
  title: {
    paddingLeft: '.5em',
    fontSize: '30px'
  },
  container: {
    paddingBottom: '0 !important'
  }
})

const initialConfig: Config = {
  weapon: advData[0].weapon,
  prep: 0,
  haste: 0,
  hasteFS: 0,
  useFS: true,
  useFSF: true,
  latencyFS: 0,
  latencyFSF: 0
}

const App: React.FC = () => {
  const [activeAdv, setActiveAdv] = useState(advData[0])
  const [config, setConfig] = useState(initialConfig)
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="header"
        disableGutters
        maxWidth={false}
        className={classes.header}
      >
        <Container disableGutters maxWidth="lg">
          <Typography component="h1" variant="h2" className={classes.title}>
            Skill Haste Calculator
          </Typography>
        </Container>
      </Container>
      <Container component="main" maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} className={classes.container}>
            <SelectorArea
              all={advData}
              onAdvChange={(adv: Adv) => {
                setActiveAdv(adv)
                setConfig(prev => ({ ...prev, weapon: adv.weapon }))
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8} className={classes.container}>
            <AdvArea adv={activeAdv} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={7}>
                <ConfigArea
                  adv={activeAdv}
                  config={config}
                  setConfig={setConfig}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={5}>
                <ComboArea adv={activeAdv} config={config} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
