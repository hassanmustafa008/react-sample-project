import React from 'react';
import Area from "../area/Area";
import './Right.scss';

class Right extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cell3: '3', cell6: '6', cell9: '9'};
    }

    render() {
        return (
            <div className="Right-column">
                <div className="right1">
                    <Area cell={this.state.cell3}></Area>
                </div>
                <div className="right2">
                    <Area cell={this.state.cell6}></Area>
                </div>
                <div className="right3">
                    <Area cell={this.state.cell9}></Area>
                </div>
            </div>
        );
    }
}

export default Right;