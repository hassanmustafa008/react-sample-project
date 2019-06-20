import React from 'react';
import {Link} from "react-router-dom";
import './ShoeType.scss';

class ShoeType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShow: false};
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        this.setState(state => state.isShow = true);
    }

    render() {
        return (
            <div className='container'>
                <p>Please select which type of shoe?</p>
                <Link to="/sandalTypes">Sandal</Link>
                <button type='button' onClick={this.toggleShow}>Chappal</button>
                <p>{this.state.isShow ? 'Thank You' : null}</p>
            </div>
        );
    }
}

export default ShoeType;