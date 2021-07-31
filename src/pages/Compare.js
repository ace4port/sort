import React from 'react'
import { Grid } from '@material-ui/core'
import Comp from '../components/sortCompare/Compare'
import Side from '../components/Side'
import useStyles from '../components/styles'

const Compare = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.main} alignItems='stretch'>
      <Grid item xs={12} md={3}>
        <Side />
      </Grid>

      <Grid item xs={12} md={9}>
        <Comp />
      </Grid>
    </Grid>
  )
}

export default Compare
