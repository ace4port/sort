import React from 'react'
import Sketch from 'react-p5'

export const Quick = ({ arr, width, height, size, speed, lines }) => {
  const values = []
  const clr = []
  const setup = (p5, parentRef) => {
    p5.createCanvas(width, height).parent(parentRef)
    for (let i = 0; i < arr.length; i++) {
      values[i] = arr[i]
      clr[i] = -1
    }
    quickSort(values, 0, values.length - 1)
  }

  const draw = (p5) => {
    p5.background(200)
    for (let i = 0; i < values.length; i++) {
      clr[i] === 0 ? p5.fill(255, 0, 0) : clr[i] === 1 ? p5.fill(0, 255, 255) : p5.fill(255, 0, 255)
      !lines
        ? p5.rect(i * size, p5.height - values[i], size, values[i])
        : p5.line(i, p5.height, i, p5.height - values[i])
    }
  }

  const quickSort = async (arr, s, e) => {
    if (s > e) return
    // this.incComp()
    let index = await partition(arr, s, e)
    clr[index] = -1
    await Promise.all([quickSort(arr, s, index - 1), quickSort(arr, index + 1, e)])
  }

  const partition = async (arr, s, e) => {
    for (let i = s; i < e; i++) {
      clr[i] = 1
    }
    // this.incComp()
    let pivotValue = arr[e]
    let pivotIndex = s
    clr[pivotIndex] = 0
    for (let i = s; i < e; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, pivotIndex)
        await sleep(speed)
        clr[pivotIndex] = -1
        pivotIndex++
        clr[pivotIndex] = 0
      }
    }
    swap(arr, pivotIndex, e)
    for (let i = s; i < e; i++) {
      if (i !== pivotIndex) clr[i] = -1
    }
    return pivotIndex
  }

  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])
  const sleep = async (t) => new Promise((resolve) => setTimeout(resolve, t))

  return <Sketch setup={setup} draw={draw} />
}
