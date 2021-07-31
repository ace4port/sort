import React from 'react'
import Grid from '@material-ui/core/Grid'

// import Tabs from './components/sortComps/Tabs'
import Tabs from './components/sortInput/Tabs'
import Menu from './components/Menu'
import Side from './components/Side'
import useStyles from './components/styles'

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Menu />

      <Grid container className={classes.main} alignItems='stretch'>
        <Grid item xs={12} md={3}>
          <Side />
        </Grid>

        <Grid item xs={12} md={9}>
          <Tabs />
        </Grid>
      </Grid>
    </>
  )
}

export default App
