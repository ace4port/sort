import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import BarChart from '@material-ui/icons/BarChart'
import useStyles from './styles'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const classes = useStyles()
  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
          <BarChart />
        </IconButton>
        <Typography variant='h5' className={classes.logo}>
          <NavLink to='/'>AlgoVis</NavLink>
        </Typography>

        <NavLink to='/sortR' className={classes.lnk}>
          <Button color='inherit'>Sort Random</Button>
        </NavLink>
        <NavLink to='/sortI' className={classes.lnk}>
          <Button color='inherit'>Sort Input</Button>
        </NavLink>

        <NavLink to='/compare' className={classes.lnk}>
          <Button color='inherit'>Compare</Button>
        </NavLink>

        <NavLink to='/lex' className={classes.lnk}>
          <Button color='inherit'>TSP</Button>
        </NavLink>

        <Button color='inherit' disabled>
          Graphs
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
