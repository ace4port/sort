import React, { Component } from "react"
import { Container } from "@material-ui/core"
import Sketch from "react-p5"

let cities = []
let order = []
let totalCities = 7
let total
let fact = 0
let recordDistance
let best
// let x = 120

export default class Tsp extends Component {
	setup = (p5, parentRef) => {
		p5.createCanvas(800, 500).parent(parentRef)
		for (let i = 0; i < totalCities; i++) {
			cities[i] = p5.createVector(
				p5.random(p5.width / 2),
				p5.random(p5.height * 0.9)
			)
			order[i] = i
		}
		recordDistance = this.calcDistance(p5, cities, order)
		console.log(recordDistance)
		best = order.slice()
		total = this.factorial(totalCities)
	}
	draw = (p5) => {
		p5.background(0)
		p5.stroke(255)
		// p5.frameRate(x)
		for (let i = 0; i < cities.length; i++) {
			p5.ellipse(cities[i].x, cities[i].y, 8, 8) // draw nodes/cities
		}
		p5.noFill()
		p5.beginShape() // draw lines showing processing - calculating
		for (let i = 0; i < order.length; i++) {
			let n = order[i]
			p5.vertex(cities[n].x, cities[n].y)
		}
		p5.endShape()

		let d = this.calcDistance(p5, cities, order) // calculate total distance between all nodes
		if (d < recordDistance) {
			recordDistance = d
			best = order.slice()
		}
		p5.textSize(24) // display text showing percentage process
		p5.fill(255)
		var percent = 100 * (fact / total)
		p5.text(p5.nf(percent, 0, 4) + "% completed", 20, p5.height - 20)
		p5.translate(p5.width / 2, 0)
		p5.textSize(24)
		p5.fill(255)
		p5.text("Best Case scenario found", 20, p5.height - 20)
		this.nextOrder(p5)
		p5.fill(255) // draw initial array vertex
		for (let i = 0; i < cities.length; i++) {
			p5.ellipse(cities[i].x, cities[i].y, 8, 8)
		}
		p5.stroke(255, 0, 255)
		p5.strokeWeight(2)
		p5.noFill()
		p5.beginShape() // draw lines connecting best yet
		for (let i = 0; i < cities.length; i++) {
			let n = best[i]
			p5.vertex(cities[n].x, cities[n].y)
		}
		p5.endShape()
		this.nextOrder(p5)
	}
	swap(a, i, j) {
		let temp = a[i]
		a[i] = a[j]
		a[j] = temp
	}
	calcDistance(p5, p, o) {
		let sum = 0
		for (let i = 0; i < o.length - 1; i++) {
			let cityA = p[o[i]] //cityAIndex = order[i]
			let cityB = p[o[i + 1]] //cityBIndex = order[i]
			let d = p5.dist(cityA.x, cityA.y, cityB.x, cityB.y)
			sum += d
		}
		console.log(sum)
		return sum
	}
	//this function below is to generate lexical order
	nextOrder(p5) {
		fact++ // https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
		// Find the largest x such that P[x]<P[x+1].
		let l1 = -1
		for (let i = 0; i < order.length; i++) {
			if (order[i] < order[i + 1]) l1 = i
		}
		// (If there is no such x, P is the last permutation.)
		if (l1 === -1) {
			p5.noLoop()
			console.log("Finished")
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
				<h1>Travelling Salesman Problem using Brute force(Lexicographic)</h1>
				<input
					type='number'
					placeholder={totalCities}
					style={{ width: "40px" }}
				></input>
				<button type='submit'>Enter</button>
				<div>
					<Sketch setup={this.setup} draw={this.draw} />
				</div>
			</Container>
		)
	}
}
