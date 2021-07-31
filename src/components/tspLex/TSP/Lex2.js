import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import Sketch from 'react-p5'

let cities = []
let order = []
let bestDistance
let bestPath
let totalPerm

export default class Tsp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nodes: this.props.nodes,
      count: 0,
      speed: this.props.speed,
    }
    this.incCount = this.incCount.bind(this)
  }
  incCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  componentDidMount() {
    this.setState({ nodes: this.props.nodes })
  }
  // componentDidUpdate() {
  // 	this.setState({ nodes: this.props.nodes });
  // }
  componentWillUnmount() {
    this.setState({ count: 0, nodes: [] })
    // while (cities.length > 0) {
    // 	cities.pop();
    // }
  }
  setup = (p5, parentRef) => {
    p5.createCanvas(800, 500).parent(parentRef)
    for (let i = 0; i < this.state.nodes.length; i++) {
      cities[i] = p5.createVector(this.state.nodes[i].x, this.state.nodes[i].y)
      order[i] = i
    }
    bestDistance = calcDistance(cities, order)
    bestPath = order.slice()
    totalPerm = this.factorial(cities.length)
  }
  draw = (p5) => {
    p5.background(0)
    p5.frameRate(this.state.speed)
    p5.stroke(255)
    for (let i = 0; i < cities.length; i++) p5.ellipse(cities[i].x, cities[i].y, 8, 8) // draw nodes/cities

    p5.noFill()
    p5.beginShape() // draw lines showing processing - calculating
    for (let i = 0; i < order.length; i++) {
      let n = order[i]
      p5.vertex(cities[n].x, cities[n].y)
    }
    p5.endShape()

    p5.textSize(24) // display text showing percentage process
    p5.fill(255)
    let percent = 100 * (this.state.count / totalPerm)
    p5.text(`${this.state.count} / ${totalPerm} done (${percent.toFixed(4)}%)`, 20, p5.height - 20)
    p5.translate(p5.width / 2, 0)
    p5.textSize(24)
    p5.fill(255)
    p5.text('Best Case scenario found yet', 20, p5.height - 20)
    p5.fill(255) // draw initial array vertex
    for (let i = 0; i < order.length; i++) {
      p5.ellipse(cities[i].x, cities[i].y, 8, 8)
    }
    p5.stroke(255, 0, 255)
    p5.strokeWeight(2)
    p5.noFill()
    p5.beginShape() // draw lines connecting bestPath yet
    for (let i = 0; i < order.length; i++) {
      let n = bestPath[i]
      p5.vertex(cities[n].x, cities[n].y)
    }
    p5.endShape()

    let d = calcDistance(cities, order) // calculate totalPerm distance between all nodes
    if (d < bestDistance) {
      bestDistance = d
      bestPath = order.slice()
    }
    this.nextOrder(p5)
  }
  swap(a, i, j) {
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }

  //this function below is to generate lexical order
  nextOrder(p5) {
    this.incCount() // https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
    // Find the largest x such that P[x]<P[x+1].
    let l1 = -1
    for (let i = 0; i < order.length; i++) {
      if (order[i] < order[i + 1]) l1 = i
    }
    // (If there is no such x, P is the last permutation.)
    if (l1 === -1) {
      p5.noLoop()
      console.log('Finished')
    }
    // Find the largest y such that P[x]<P[y].
    let l2 = -1
    for (let j = 0; j < order.length; j++) {
      if (order[l1] < order[j]) l2 = j
    }
    // Swap P[x] and P[y].
    this.swap(order, l1, l2)
    // Reverse P[x+1 .. n].
    let endArr = order.splice(l1 + 1)
    endArr.reverse()
    order = order.concat(endArr)
  }
  factorial(n) {
    if (n === 1) return 1
    return n * this.factorial(n - 1)
  }
  render() {
    return (
      <Container>
        <Sketch setup={this.setup} draw={this.draw} />
      </Container>
    )
  }
}
function calcDistance(p, o) {
  let sum = 0
  for (let i = 0; i < o.length - 1; i++) {
    let cityAIndex = o[i]
    let cityA = p[cityAIndex] //cityAIndex = order[i]
    let cityB = p[o[i + 1]] //cityBIndex = order[i]
    // let d = p5.dist(cityA.x, cityA.y, cityB.x, cityB.y);
    let xD = cityA.x - cityB.x
    let yD = cityA.y - cityB.y
    let d = Math.hypot(xD, yD)
    // let d = Math.sqrt(xD * xD + yD * yD);
    sum += d
  }
  return sum
}
