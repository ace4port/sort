import React from 'react'
import Grid from '@material-ui/core/Grid'

import Tabs from '../components/sortComps/Tabs'
import Side from '../components/Side'
import useStyles from '../components/styles'

const Sort = () => {
  const classes = useStyles()
  return (
    <>
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

export default Sort
