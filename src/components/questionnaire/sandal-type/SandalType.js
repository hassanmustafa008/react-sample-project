import React from 'react';
import './SandalType.scss';

class SandalType extends React.Component {
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
                <p>Please select which sandal you want to buy?</p>
                <button type='button' onClick={this.toggleShow}>Leather</button>
                <button type='button' onClick={this.toggleShow}>Outdoor</button>
                <p>{this.state.isShow ? 'Thank You' : null}</p>
            </div>
        );
    }
}

export default SandalType;