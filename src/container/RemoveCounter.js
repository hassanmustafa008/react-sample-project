import React from 'react';
import {removeCounter} from '../actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class RemoveCounter extends React.Component {
    render() {
        return (
            <form>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.dispatch(removeCounter())
                                }}>
                            Remove
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(removeCounter, dispatch)};
}

export default connect(mapDispatchToProps)(RemoveCounter);