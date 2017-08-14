import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    userInput(e) {
        let val = e.target.value;
        this.setState({
            userInput: val
        })
    }

    solveArray(userInput) {
        var arr = userInput.split(",");
        var evens = [];
        var odds = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push((arr[i]));
            } else {
                odds.push((arr[i]));
            }
        }
        this.setState({
            evenArray: evens.join(","),
            oddArray: odds.join(",")
        })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.userInput(e)}></input>
                <button className="confirmationButton" onClick={(e) => this.solveArray(this.state.userInput)}>
                    SORT THE NUMBERS!
                </button>
                <span className="resultsBox">Evens: [{this.state.evenArray}]</span>
                <span className="resultsBox">Odds: [{this.state.oddArray}]</span>
            </div>
        )
    }
}