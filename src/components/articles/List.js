import React from 'react';
import {connect} from "react-redux";

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.articles.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {articles: state.articles};
};


export default connect(mapStateToProps)(List);