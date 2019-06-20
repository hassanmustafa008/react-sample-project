import React from 'react';
import Area from "../area/Area";
import './Left.scss';

class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cell1: '1', cell4: '4', cell7: '7'};
    }

    render() {
        return (
            <div className="Left-column">
                <Area cell={this.state.cell1}></Area>
                <Area cell={this.state.cell4}></Area>
                <Area cell={this.state.cell7}></Area>
            </div>
        );
    }
}

export default Left;