import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            family: [
                { name: "Shawn", age: 28, hairColor: "black"},
                { name: "Camille", title: "PTA", age: 26 },
                { name: "Zooey", hairColor: "white" }
            ],
            userInput: "",
            filteredFamily: []
        }
    }

    userInput(e) {
        let val = e.target.value;
        this.setState({
            userInput: val
        })
    }

    filterFamily(prop) {
        var theFam = this.state.family;
        var theFilteredFam = [];

        for (var i = 0; i < theFam.length; i++) {
            if(theFam[i].hasOwnProperty(prop)) {
                theFilteredFam.push(theFam[i]);
            }
        }this.setState({
            filteredFamily: theFilteredFam
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4 className="">Filter Object</h4>
                <span className="puzzleText">My Peeps: { JSON.stringify(this.state.family, null, 10) }</span>
                <input className="inputLine" onChange={(e) => this.userInput(e)}></input>
                <button className="confirmationButton" onClick={() => this.filterFamily(this.state.userInput)}>FILTER</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredFamily) }</span>
            </div>
        )
    }
}