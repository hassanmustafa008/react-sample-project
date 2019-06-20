import React from 'react';
import Area from "../area/Area";
import './Middle.scss';

class Middle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cell2: '2', cell5: '5', cell8: '8'};
    }

    render() {
        return (
            <div className="Middle-column">
                <Area cell={this.state.cell2}></Area>
                <Area cell={this.state.cell5}></Area>
                <Area cell={this.state.cell8}></Area>
            </div>
        );
    }
}

export default Middle;