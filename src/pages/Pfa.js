import React from 'react'
import { Grid } from '@material-ui/core'
import Tsm from '../components/tspLex/Tsm'
import Side from '../components/tspLex/Side'
import useStyles from '../components/styles'

const Pfa = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.main} alignItems='stretch'>
      <Grid item xs={12} md={3}>
        <Side />
      </Grid>

      <Grid item xs={12} md={9}>
        <Tsm />
      </Grid>
    </Grid>
  )
}

export default Pfa
