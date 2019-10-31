/*
THIS IS A DEMONSTRATION OF BEST PRACTICES FOR UPDATING STATE IN A CLASS
COMPONENT WHEN THE STATE UPDATE RELIES ON THE PREVIOUS STATE.

SINCE STATE UPDATES ARE ASYNCHRONOUS, IT IS POSSIBLE THAT OUR STATE UPDATES AFTER WE PERFORM A CALCULATION THAT RELIED ON THE PREVIOUS STATE, GIVING US AN INCORRECT VALUE.

TO AVOID THIS, ANY TIME STATE VALUES ARE USED INSIDE A STATE UPDATE, WE USE A CALLBACK FUNCTION TO UPDATE THE STATE INSTEAD OF MANIPULATING THE STATE OBJECT DIRECTLY. 

EX: this.setState((previousState, previousProps)=>{STATE UPDATE HAPPENS HERE}, ()=>{THIS HAPPENS NEXT})
*/

import React, { Component } from "react"

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			somethingToChange: 1
		}
	}
	increment = () => {
		// this.setState CAN NOT BE ACCESSED UNLESS WE BIND THE .this KEYWORD TO THE FUNCTION OR SIMPLY MAKE IT AN ARROW FUNCTION
		this.setState(
			(prevState, prevProps) => {
				// USE A CALLBACK TO MANIPULATE STATE
				return {
					somethingToChange: prevState.somethingToChange + 1 // prevState IS GUARANTEED TO CONTAIN THE VALUE WE ARE LOOKING FOR WHEREAS A DIRECT STATE CHANGE MIGHT CONTAIN SOMETHING ELSE DUE TO ASYNCHRONOUS CODE.
				}
			}, // AFTER THE STATE UPDATE, IF WE HAVE ANYTHING THAT NEEDS TO RUN WE CAN USE ANOTHER CALLBACK AS THE SECOND PARAMETER OF this.SetState()
			() => {
				console.log(
					`This Happens AFTER state update. ${this.state.somethingToChange}`
				)
			}
		)
	}
	render() {
		return (
			<div>
				<p>{this.state.somethingToChange}</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		)
	}
}
