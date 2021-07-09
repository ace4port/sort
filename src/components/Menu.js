import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import BarChart from '@material-ui/icons/BarChart'

import useStyles from './styles'

const Menu = () => {
  const classes = useStyles()
  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
          <BarChart />
        </IconButton>
        <Typography variant='h5' className={classes.logo}>
          AlgoVis
        </Typography>

        <Button color='inherit' disabled>
          Trees
        </Button>
        <Button color='inherit'>Sort</Button>
        <Button color='inherit'>Compare</Button>
        <Button color='inherit'>TSP</Button>
        <Button color='inherit' disabled>
          Graphs
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
