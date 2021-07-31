import React, { useState } from 'react'
import Sketch from 'react-p5'
import { Button, Paper, Typography } from '@material-ui/core'
import { Slider, Grid } from '@material-ui/core'
import { MenuItem, FormHelperText, FormControl } from '@material-ui/core'
import { InputLabel, Select } from '@material-ui/core'
import Lex2 from '../components/TSP/Lex2'

import useStyles from '../components/styles'

let nodes = []
let frame = [2, 5, 10, 30, 60]

class Node {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show(p5) {
    p5.stroke(255)
    p5.fill(255, 255, 255)
    p5.ellipse(this.x, this.y, 5)
  }
}

const Collect = () => {
  const classes = useStyles()
  const [calc, setCalc] = useState(false)
  const [speed, setSpeed] = useState(frame[4])
  const [nodeSize, setNodeSize] = useState(0)

  const setup = (p5, parentRef) => {
    p5.createCanvas(400, 500).parent(parentRef)
  }
  const draw = (p5) => {
    p5.background(20)
    for (let i = 0; i < nodes.length; i++) nodes[i].show(p5)
    // p5.noLoop();
  }
  const mouseClicked = (p5, e) => {
    console.log(e)
    if (e.target.nodeName === 'CANVAS') {
      let x = new Node(p5.mouseX, p5.mouseY)
      nodes.push(x)
    }
    console.log(nodes.length)
  }

  const clearNodes = () => {
    while (nodes.length > 0) {
      nodes.pop()
    }
    console.log(nodes.length)
  }

  const genRandom = (n, h, w) => {
    for (let i = 0; i < n; i++) {
      let x = new Node(parseInt(Math.random() * h), parseInt(Math.random() * w))
      nodes[i] = x
    }
    console.log(nodes)
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h5'>Travelling Salesman Problem using Brute force(Lexicographic)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper>
            <Grid container className={classes.paper}>
              <Grid item>
                <Typography>Speed</Typography>
                <Slider
                  defaultValue={speed}
                  aria-labelledby='speed'
                  valueLabelDisplay='auto'
                  name='speed'
                  step={1}
                  min={1}
                  max={5}
                  value={speed}
                  onChange={(e, v) => setSpeed(v)}
                />
              </Grid>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel id='nodeNum'>Number of Nodes</InputLabel>
                  <Select labelId='nodeNum' id='nodeNum' value={nodeSize} onChange={(e) => setNodeSize(e.target.value)}>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                  </Select>
                  <FormHelperText>Pick between 4 and 7</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item>
                <Button
                  type='button'
                  varaint='contained'
                  size='small'
                  color='primary'
                  onClick={() => clearNodes(nodes)}
                >
                  CLEAR!
                </Button>
                <Button
                  type='button'
                  varaint='contained'
                  size='small'
                  color='primary'
                  onClick={() => genRandom(nodeSize, 400, 500)}
                >
                  Generate Random
                </Button>
                <Button type='button' varaint='contained' size='small' color='secondary' onClick={() => setCalc(!calc)}>
                  GO!
                </Button>
              </Grid>
            </Grid>
            <Grid item style={{ background: 'inherit' }}>
              {!calc && <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} />}
              {calc && <Lex2 nodes={nodes} speed={speed} />}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography>Info about tsp</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Collect
