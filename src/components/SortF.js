import React, { useState, useEffect } from 'react'
import Sketch from 'react-p5'

let values = []
let clr = []

const Sort = ({ width, speed, type, arr, setComp, setSwaps, setTime }) => {
  const [p, setP] = useState(0)
  const [q, setQ] = useState(0)

  useEffect(() => {
    setP(performance.now())
    return () =>
      setTimeout(
        clr.forEach((e) => (e = -1)),
        0
      )
  }, [])

  useEffect(() => {
    setTime(((q - p) / 1000).toFixed(2))
  }, [p, q, setTime])

  const setup = async (p5, parentRef) => {
    p5.createCanvas(500, 400).parent(parentRef)
    values = new Array(p5.width / width)
    for (let i = 0; i < values.length; i++) values[i] = arr[i]

    setTimeout(() => {
      soort(p5)
      setTimeout(() => setQ(performance.now()), 0)
    }, 0)
  }

  const soort = async (p5) => {
    type === 'bubble'
      ? await bubble(values, p5)
      : type === 'insertion'
      ? await insertion(values, p5)
      : type === 'selection'
      ? await selection(values, p5)
      : type === 'quick'
      ? await quickSort(values, 0, values.length - 1)
      : await mergeSort(values, 0, values.length - 1)
  }

  const draw = (p5) => {
    p5.background(0)
    let w = width
    for (let i = 0; i < values.length; i++) {
      clr[i] === 0
        ? p5.fill(250, 250, 0)
        : clr[i] === 1
        ? p5.fill(0, 255, 255)
        : clr[i] === 2
        ? p5.fill(220, 0, 200)
        : clr[i] === 3
        ? p5.fill(100, 200, 220)
        : p5.fill(255, 0, 255)
      p5.rect(i * w, p5.height - values[i], w, values[i])
    }
  }

  const bubble = async (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length; j++) {
        incComp()
        clr[j] = 0
        clr[j + 1] = 1
        if (arr[j] > arr[j + 1]) await swap(arr, j, j + 1)
        clr[j] = 2
      }
      clr[i] = -1
    }
  }

  const insertion = async (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let j = i
      while (j > 0) {
        incComp()
        if (arr[j - 1] > arr[j]) {
          incComp()
          clr[j] = 0
          clr[j - 1] = 1
          await swap(arr, j, j - 1)
          clr[j] = clr[j - 1] = 2
        }
        j--
      }
      clr[i] = 3
    }
  }

  const selection = async (arr, p5) => {
    let minIndex = 0
    let i
    for (i = 0; i < arr.length - 1; i++) {
      minIndex = i
      clr[i] = 0
      for (let j = i + 1; j < arr.length; j++) {
        clr[j] = 1
        incComp()
        await sleep(speed / 2)
        if (arr[j] < arr[minIndex]) {
          clr[minIndex] = -1
          minIndex = j
        } else {
          clr[j] = 2
        }
      }
      clr[i] = 0
      await swap(arr, minIndex, i)
      clr[minIndex] = 3
    }
    p5.noLoop()
  }

  // Merges two subarrays-First is arr[l..m] Second is arr[m+1..r]
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
        incComp()
        arr[k] = L[i]
        // await this.sleep(this.state.speed)
        i++
      } else {
        incComp()
        arr[k] = R[j]
        j++
      }
      incSwap()
      k++
    }
    await sleep(speed)
    while (i < n1) {
      incComp() // Copy the remaining elements of L[], if there are any
      arr[k] = L[i]
      i++
      k++
    }
    while (j < n2) {
      incComp() // Copy the remaining elements of R[], if there are any
      arr[k] = R[j]
      j++
      k++
    }
  }
  // l is for left index and r is right index of the sub-array of arr to be sorted
  const mergeSort = async (arr, l, r) => {
    if (l >= r) return //returns recursively
    var m = l + parseInt((r - l) / 2)
    await Promise.all([await mergeSort(arr, l, m), await mergeSort(arr, m + 1, r), await merge(arr, l, m, r)])
  } //# This code is contributed by Mayank Khanna taken from Geeks4Geeks.org

  const quickSort = async (arr, s, e, p5) => {
    if (s > e) return
    incComp()
    let index = await partition(arr, s, e)
    clr[index] = -1
    await Promise.all([quickSort(arr, s, index - 1), quickSort(arr, index + 1, e)])
  }
  const partition = async (arr, s, e) => {
    for (let i = s; i < e; i++) {
      clr[i] = 1
    }
    incComp()
    let pivotValue = arr[e]
    let pivotIndex = s
    clr[pivotIndex] = 0
    for (let i = s; i < e; i++) {
      if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex)
        clr[pivotIndex] = -1
        incComp()
        pivotIndex++
        clr[pivotIndex] = 0
      }
    }
    await swap(arr, pivotIndex, e)
    for (let i = s; i < e; i++) {
      if (i !== pivotIndex) clr[i] = -1
    }
    return pivotIndex
  }

  const incComp = () => setComp((c) => c + 1)
  const incSwap = () => setSwaps((s) => s + 1)

  const swap = async (arr, a, b) => {
    await sleep(speed)
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
    setSwaps((p) => p + 1)
  }
  const sleep = (s) => new Promise((resolve) => setTimeout(resolve, s))

  return <Sketch setup={setup} draw={draw} />
}

export default Sort
