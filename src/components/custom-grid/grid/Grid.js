import React from 'react';
import Left from "../left/Left";
import Middle from "../middle/Middle";
import Right from "../right/Right";
import './Grid.scss';

class Grid extends React.Component {
    render() {
        return (
            <div className="grid">
                <div className="row">
                    <div className="col">
                        <Left></Left>
                    </div>
                    <div className="col">
                        <Middle></Middle>
                    </div>
                    <div className="col">
                        <Right></Right>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;