import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            palindrome: "",
        }
    }

    userInput(e) {
        let val = e.target.value;
        this.setState({
            userInput: val
        })
    }

    palindromeChecker(word) {
        var isPalindrome = null;
        var backWords = word.split('').reverse().join('');
        word === backWords ? isPalindrome = true : isPalindrome = false;
        this.setState({
            palindrome: isPalindrome
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.userInput(e)}></input>
                <button className="confirmationButton" onClick={() => this.palindromeChecker(this.state.userInput)}>CHECK</button>
                <span className="resultsBox">{JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}