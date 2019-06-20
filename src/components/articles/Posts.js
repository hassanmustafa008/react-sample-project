import React from 'react';
import {connect} from "react-redux";
import {getData} from '../../actions/index';

export class Post extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // calling the new action creator
        this.props.getData();
    }

    render() {
        return (
            <ul>
                {this.props.articles.map(el => (
                    <li key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.remoteArticles
    };
}

export default connect(mapStateToProps, {getData})(Post);