import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Sketch from "react-p5";

// let nodes = [];
// let nodeOrder = [];
// let bestDistance;
// let bestPath;
// let totalPerm;
let x;

function setup(p5, parentRef) {
	p5.createCanvas(400, 400).parent(parentRef);
}

// function bubbleSort() {
// 	const arr = this.state.array;
// 	const n = arr.length;
// 	for (let i = n - 1; i > 0; i--) {
// 		for (let j = 0; j < i; j++) {
// 			setTimeout(() => {
// 				if (arr[j] > arr[j + 1]) {
// 					let temp = arr[j];
// 					arr[j] = arr[j + 1];
// 					arr[j + 1] = temp;
// 					this.setState({ swaps: this.state.swaps + 1 });
// 				}
// 				this.setState({ comparisons: this.state.comparisons + 1 });
// 			}, i * 10);
// 		}
// 	}
// 	this.setState({ array: arr });
// }

const Lex3 = ({ node, speed }) => {
	// const [nodes, setNodes] = useState([node]);

	function mouseClicked(p5) {
		// setcolor((clr) => (clr = clr + 20));
	}
	function draw(p5) {
		p5.background(20);
		p5.rect(x, 40, 20, 20);

		x = x + 1;
		if (x > p5.width) x = 0;
	}
	return (
		<Container>
			<h1>Hello</h1>
			<Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} />;
		</Container>
	);
};

export default Lex3;
