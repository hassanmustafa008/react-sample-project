import React from 'react';
import {Link} from "react-router-dom";
import './Shoe.scss';

class Shoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShow: false};
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        this.setState(state => state.isShow = true);
    }

    submit = () => {
        this.setState(state => state.rttt = false);
    };

    render() {
        return (
            <div className='container'>
                <p>Would you like to buy an shoe?</p>
                <Link to={'/shoeTypes'} className='primary'>Yes</Link>
                <button type='button' className='primary' onClick={this.toggleShow}>No</button>
                <p>{this.state.isShow ? 'Try something else' : null}</p>
            </div>
        );
    }
}

export default Shoe;