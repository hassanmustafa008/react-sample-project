import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {addCounter} from '../actions';

class AddCounter extends React.Component {
    render() {
        return (
            <form>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.dispatch(addCounter());
                                }}>
                            Add
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(addCounter, dispatch)}
}

export default connect(mapDispatchToProps)(AddCounter);