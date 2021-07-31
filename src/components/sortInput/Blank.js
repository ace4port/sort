import React from 'react'
import Sketch from 'react-p5'

let values = [20, 10, 7]

const Blank = ({ width = 20, arr }) => {
  const setup = async (p5, parentRef) => {
    p5.createCanvas(500, 400).parent(parentRef)
  }
  values = arr

  const draw = (p5) => {
    p5.background(0)
    let w = width * 3

    p5.fill(250, 0, 250)
    for (let i = 0; i < values.length; i++) {
      p5.rect(i * w, p5.height - values[i] * 20, w, values[i] * 20)
    }
  }

  return <Sketch setup={setup} draw={draw} />
}

export default Blank
