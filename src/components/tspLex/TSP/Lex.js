import React, { Component } from "react";
import {
	Button,
	Container,
	Typography,
	Slider,
	TextField,
	Grid,
} from "@material-ui/core";
import Sketch from "react-p5";
import Lex2 from "./Lex2";

let nodes = [];
let frame = [2, 5, 10, 30, 60];

class Node {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	show(p5) {
		p5.stroke(255);
		p5.fill(255, 255, 255);
		p5.ellipse(this.x, this.y, 5);
	}
}

export default class Collect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calc: false,
			speed: frame[4],
			n: 0,
		};
		this.setCalc = this.setCalc.bind(this);
		this.setSpeed = this.setSpeed.bind(this);
	}
	setCalc = () => this.setState({ calc: !this.state.calc });
	setSpeed = (e, s) => this.setState({ speed: s });

	setup = (p5, parentRef) => {
		p5.createCanvas(400, 500).parent(parentRef);
		// p5.noLoop();
	};
	genRandom(n) {
		for (let i = 0; i < n; i++) {
			let x = new Node(
				parseInt(Math.random() * 400),
				parseInt(Math.random() * 400)
			);
			nodes[i] = x;
		}
		console.log(nodes);
	}
	draw(p5) {
		p5.background(20);
		for (let i = 0; i < nodes.length; i++) nodes[i].show(p5);
	}
	mouseClicked(p5, event) {
		console.log(event);
		if (event.target.nodeName == "CANVAS") {
			let x = new Node(p5.mouseX, p5.mouseY);
			nodes.push(x);
		}
		console.log(nodes.length);
	}
	keyPressed(p5) {
		if (p5.isLooping()) {
			p5.noLoop();
		} else {
			p5.loop();
		}
		return false;
	}
	clearNodes() {
		while (nodes.length > 0) {
			nodes.pop();
		}
		console.log(nodes.length);
		// nodes = [];
	}
	render() {
		return (
			<Container>
				<h1>Travelling Salesman Problem using Brute force(Lexicographic)</h1>
				<form>
					<Grid container spacing={3}>
						<Grid item={6}>
							<Typography>Speed</Typography>
							<Slider
								defaultValue={this.state.speed}
								// getAriaValueText={"Speed"}
								aria-labelledby='speed'
								// valueLabelDisplay='auto'
								name='speed'
								step={1}
								min={1}
								max={5}
								// marks={marks}
								value={this.state.speed}
								onChange={this.setSpeed}
							/>
						</Grid>
						<Grid item={6}>
							<TextField
								id='filled-number'
								label='Number'
								type='number'
								InputLabelProps={{
									shrink: true,
								}}
								variant='filled'
								onChange={(e) => this.setState({ n: e.target.value })}
							/>
						</Grid>
						<Button
							type='button'
							varaint='contained'
							size='small'
							color='primary'
							onClick={() => this.genRandom(this.state.n)}
						>
							Generate Random nodes
						</Button>
						<Button
							type='button'
							varaint='contained'
							size='small'
							color='primary'
							onClick={this.clearNodes}
						>
							CLEAR!
						</Button>
						<Button
							type='button'
							varaint='contained'
							size='small'
							color='secondary'
							onClick={this.setCalc}
						>
							GO!
						</Button>
					</Grid>
				</form>
				{!this.state.calc && (
					<Sketch
						setup={this.setup}
						draw={this.draw}
						// keyPressed={this.keyPressed}
						mouseClicked={this.mouseClicked}
					/>
				)}
				{this.state.calc && <Lex2 nodes={nodes} speed={this.state.speed} />}
				{console.log(nodes.length)}
			</Container>
		);
	}
}
