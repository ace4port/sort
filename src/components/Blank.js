import React, { useEffect } from 'react'
import Sketch from 'react-p5'

let values = []
let clr = []

const Blank = ({ width, setArr }) => {
  const setup = async (p5, parentRef) => {
    p5.createCanvas(500, 400).parent(parentRef)
    gen()
  }
  const gen = (p5) => {
    values = new Array(500)
    for (let i = 0; i < values.length; i++) {
      values[i] = Math.ceil(Math.random() * 400)
      clr[i] = -1
    }
  }

  useEffect(() => {
    gen(width)
    setArr(values)
  }, [width, setArr])

  const draw = (p5) => {
    p5.background(0)
    let w = width
    for (let i = 0; i < values.length; i++) {
      p5.fill(250, 0, 250)
      p5.rect(i * w, p5.height - values[i], w, values[i])
    }
  }
  return <Sketch setup={setup} draw={draw} />
}

export default Blank
