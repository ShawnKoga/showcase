import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            names: ["Shawn", "Camille", "Kevin", "Sabrena", "Ellise", "Jacob", "Rhett", "Paige", "Spencer", "Erik", "Claude"],
            userInput: "",
            filteredNames: []
        }
    }

    userInput(e) {
        let val = e.target.value;
        this.setState({
            userInput: val
        })
    }

    filterNames(char) {
        var theNames = this.state.names;
        var theFilteredNames = [];
        for(var i = 0; i < theNames.length; i++) {
            if(theNames[i].startsWith(this.state.userInput)) {
                theFilteredNames.push(theNames[i]);
            }
        }this.setState({
            filteredNames: theFilteredNames
        })
    }

    render() {
        return (
            <div>
                <div className="puzzleBox filterStringPB">
                    <h4>Filter String</h4>
                    <span className="puzzleText">Name: { JSON.stringify(this.state.names, null, 10) }</span>
                    <input className="inputLine" onChange={(e) => this.userInput(e)}></input>
                    <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>FILTER</button>
                    <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredNames) }</span>
                </div>
            </div>
        )
    }
}