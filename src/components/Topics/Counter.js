import React, { Component } from 'react';

export default class Counter extends Component {
    constructor () {
        super();

        this.state = {
            count: 0
        }
    }


    render() {

        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)

        return (
            <div className="puzzleBox sumPB">
                <h4>Counter</h4>
                <span className="resultsBox">Seconds since component rendered : {this.state.count}</span>
            </div>
        )
    }
}

