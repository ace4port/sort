import React from 'react'
import Sketch from 'react-p5'

export const Merge = ({ arr, width, height, size, speed, lines }) => {
  const values = []
  const clr = []
  const setup = (p5, parentRef) => {
    p5.createCanvas(width, height).parent(parentRef)
    for (let i = 0; i < arr.length; i++) {
      values[i] = arr[i]
      clr[i] = -1
    }
    mergeSort(values, 0, values.length - 1)
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

  const merge = async (arr, l, m, r) => {
    let n1 = m - l + 1
    let n2 = r - m
    let L = new Array(m - l + 1) // Create temp arrays
    let R = new Array(r - m)
    for (let i = 0; i < n1; i++) L[i] = arr[l + i] // Copy to temp arrays L and R
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j]
    // Merge the temp arrays back into arr[l..r]
    var i = 0 // Initial index of first subarray
    var j = 0 // Initial index of second subarray
    var k = l // Initial index of merged subarray
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        // this.incComp();
        arr[k] = L[i]
        i++
      } else {
        // this.incComp();
        arr[k] = R[j]
        j++
      }
      k++
    }
    while (i < n1) {
      // this.incComp(); // Copy the remaining elements of L[], if there are any
      await sleep(speed)
      arr[k] = L[i]
      i++
      k++
    }
    while (j < n2) {
      //   this.incComp() // Copy the remaining elements of R[], if there are any
      await sleep(speed)
      arr[k] = R[j]
      j++
      k++
    }
  }
  // l is for left index and r is right index of the sub-array of arr to be sorted
  const mergeSort = async (arr, l, r) => {
    if (l >= r) return //returns recursively
    var m = l + parseInt((r - l) / 2)
    // await sleep(speed)
    await mergeSort(arr, l, m)
    // await sleep(speed)
    await mergeSort(arr, m + 1, r)
    // await sleep(speed)
    await merge(arr, l, m, r)
  } //# This code is contributed by Mayank Khanna taken from Geeks4Geeks.org

  // const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])
  const sleep = async (t) => new Promise((resolve) => setTimeout(resolve, t))

  return <Sketch setup={setup} draw={draw} />
}
