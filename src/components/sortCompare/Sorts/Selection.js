import React from 'react'
import Sketch from 'react-p5'

export const Selection = ({ arr, width, height, size, speed }) => {
  const values = []
  const clr = []
  const setup = (p5, parentRef) => {
    p5.createCanvas(height, width).parent(parentRef)
    for (let i = 0; i < arr.length; i++) {
      values[i] = arr[i]
      clr[i] = -1
    }
    selection(values)
  }

  const draw = (p5) => {
    p5.background(0)
    for (let i = 0; i < values.length; i++) {
      clr[i] === 0 ? p5.fill(255, 0, 0) : clr[i] === 1 ? p5.fill(0, 255, 255) : p5.fill(255, 0, 255)
      p5.rect(i * size, p5.height - values[i], size, values[i])
      //   p5.line(i, p5.height, i, p5.height - values[i])
    }
  }

  const selection = async (array) => {
    let minIndex = 0
    let i
    for (i = 0; i < array.length - 1; i++) {
      minIndex = i
      clr[i] = 0
      for (let j = i + 1; j < array.length; j++) {
        clr[j] = 1
        await sleep(speed)
        if (array[j] < array[minIndex]) {
          // if (minIndex !== i)
          clr[minIndex] = 2 //set background color red
          minIndex = j
        } else {
          //background color rred
          clr[j] = 2
        }
      }
      clr[i] = 0
      swap(array, minIndex, i)
      await sleep(speed)
    }
  }

  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])
  const sleep = async (t) => new Promise((resolve) => setTimeout(resolve, t))

  return <Sketch setup={setup} draw={draw} />
}
