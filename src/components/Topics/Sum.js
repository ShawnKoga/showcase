import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: 0
        }
    }

    userInput(e) {
        let val = parseInt(e.target.value, 10);
        this.setState({
            number1: val
        })
    }

    otherInput(f) {
        let secondVal = parseInt(f.target.value, 10);
        this.setState({
            number2: secondVal
        })
    }

    addNumbers(num1, num2) {
        var addedNums = num1 + num2;
        this.setState({
            sum: addedNums
        })
    }


    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.userInput(e)}></input>
                <input className="inputLine" onChange={(f) => this.otherInput(f)}></input>
                <button className="confirmationButton" onClick={() => this.addNumbers(this.state.number1, this.state.number2)}>ADD NUMBERS</button>
                <span className="resultsBox">{ JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}