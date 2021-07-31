import React from 'react'
import Sketch from 'react-p5'

export const Bubble = ({ arr, width, height, size, speed }) => {
  const values = []
  const clr = []
  const setup = (p5, parentRef) => {
    p5.createCanvas(height, width).parent(parentRef)
    for (let i = 0; i < arr.length; i++) {
      values[i] = arr[i]
      clr[i] = -1
    }
    bubble(values)
  }

  const draw = (p5) => {
    p5.background(0)
    for (let i = 0; i < values.length; i++) {
      clr[i] === 0 ? p5.fill(255, 0, 0) : clr[i] === 1 ? p5.fill(0, 255, 255) : p5.fill(255, 0, 255)
      p5.rect(i * size, p5.height - values[i], size, values[i])
      //   p5.line(i, p5.height, i, p5.height - values[i])
    }
  }

  const bubble = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        clr[j] = 0
        clr[j + 1] = 1
        if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
        await sleep(speed)
        clr[j] = -1
        clr[j - 1] = 2
      }
    }
  }

  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])
  const sleep = async (t) => new Promise((resolve) => setTimeout(resolve, t))

  return <Sketch setup={setup} draw={draw} />
}
