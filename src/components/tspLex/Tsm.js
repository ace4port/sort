import React, { useState, useEffect } from 'react'
import Sketch from 'react-p5'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Form from './Form'
import useStyles from '../styles'
import Lex2 from './TSP/Lex2'

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

const Main = () => {
  const classes = useStyles()
  const [calc, setCalc] = useState(false)
  const [speed, setSpeed] = useState(frame[4])
  const [node, setNode] = useState(4)

  useEffect(() => {
    return () => {
      clearNodes()
    }
  }, [node, calc])

  const setup = (p5, parentRef) => p5.createCanvas(400, 500).parent(parentRef)

  const genRandom = (n) => {
    for (let i = 0; i < n; i++) {
      let x = new Node(parseInt(Math.random() * 400), parseInt(Math.random() * 400))
      nodes[i] = x
    }
  }

  const draw = (p5) => {
    p5.background(20)
    for (let i = 0; i < nodes.length; i++) nodes[i].show(p5)
  }

  const mouseClicked = (p5, event) => {
    console.log(event)
    if (event.target.nodeName === 'CANVAS') {
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

  return (
    <>
      <Grid container alignItems='center' className={classes.tcon}>
        <Grid item className={classes.tsp}>
          {!calc ? (
            <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} />
          ) : (
            <Lex2 nodes={nodes} speed={frame[speed]} setSpeed={setSpeed} />
          )}
        </Grid>
        {!calc && (
          <Grid item className={classes.tsp}>
            <Form
              speed={speed}
              setSpeed={setSpeed}
              clearNodes={clearNodes}
              node={node}
              setNode={setNode}
              genRandom={genRandom}
            />
          </Grid>
        )}
        <Button variant='contained' color='secondary' onClick={() => setCalc(!calc)}>
          {!calc ? 'Start!' : 'STOP'}
        </Button>
      </Grid>
    </>
  )
}

export default Main
