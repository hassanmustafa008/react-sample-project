import React from 'react';
import {Link} from "react-router-dom";

class EditMockoon extends React.Component {
    constructor(props) {
        super(props);
    }

    submit = () => {
        this.setState(state => state.rttt = false);
    };

    render() {
        return (
            <div>
                <input type='text'/>
                <button type='button' onClick={this.toggleShow}>Update</button>
            </div>
        );
    }
}

export default EditMockoon;