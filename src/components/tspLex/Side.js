import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import useStyles from '../styles'

const Side = () => {
  const classes = useStyles()

  return (
    <Paper className={`${classes.paper} ${classes.side}`}>
      <Typography variant='h6' className={classes.title}>
        Travelling Salesman Problem using lexicographical method (brute force)
      </Typography>
      <Typography>
        The travelling salesman problem (or TSP) asks the following question: "Given a list of cities and the distances
        between each pair of cities, what is the shortest possible route that visits each city exactly once and returns
        to the origin city?".
        <br />
        It is an NP-hard problem in combinatorial optimization, important in theoretical computer science and operations
        research. <br />
        The travelling purchaser problem and the vehicle routing problem are both generalizations of TSP. <br />
        The problem was first formulated in 1930 and is one of the most intensively studied problems in optimization. It
        is used as a benchmark for many optimization methods. Even though the problem is computationally difficult, many
        heuristics and exact algorithms are known, so at some instances with tens of thousands of cities can be solved
        completely and even problems with millions of cities can be approximated within a small fraction of 1%.
        <br />
        The TSP has several applications even in its purest formulation, such as planning, logistics, and the
        manufacture of microchips. Slightly modified, it appears as a sub-problem in many areas, such as DNA sequencing.
        <br />
        In many applications, additional constraints such as limited resources or time windows may be imposed. it
        displays Greedy algorithm, Local Search, and Simulated annealing strategies for a group of US cities.
        <em>~Wikipedia</em>
      </Typography>
      <hr />
      <Typography>
        Here we have used the most basic/ naive method- brute force using <b>lexicographical</b> order(a, aa, ab ...) to
        find the shortest path from a node for the introduction as well as visual introduction.
      </Typography>
      <hr />
      <ol>
        <li>
          Consider <b>city 1</b> as starting point
        </li>
        <li>
          Generate all <b>(n-1)! permutations </b>
        </li>
        <li>
          Calculate the cost of every traversal and keep track of<b> minimun cost</b> (on the right)
        </li>
      </ol>
      <hr />
      <Typography>
        <b>Tools used</b>: <strong>React</strong> and <strong>p5.js</strong> library
      </Typography>
      <hr />
      <Typography>
        <b>How it works:</b> There are 2 ways to use it
      </Typography>
      <Typography>
        1. Select a number of nodes to be generated from drop down<em>Optimum for me was 7 nodes</em>
      </Typography>
      <Typography>Click generate random to generate picked number of nodes.</Typography>
      <Typography>2. The other way to visualize is to click on canvas to generate number of nodes</Typography>
      <hr />
      <Typography>
        Press <b>Go</b> to see it visualized.
      </Typography>
      <Typography>
        Press <b>Stop</b> if you want to change some parameters- remember to clear nodes
      </Typography>
      <hr />
      <Typography className={classes.footer}>&#169;2021 All rights reserved</Typography>
      <br />
    </Paper>
  )
}

export default Side
