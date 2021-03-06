import React from 'react';
import {connect} from "react-redux";
import {addArticle} from '../../actions/index';
import {postData} from '../../actions/index';

class AddArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", author: "", badWord: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = 5;
        const title = this.state.title;
        const author = this.state.author;
        // this.props.addArticle({id, title, author});
        this.props.postData({id, title, author});
        this.setState({title: "", author: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        value={this.state.author}
                        onChange={this.handleChange}
                    />
                    <p>Note: You can't use bad words in article e.g.(spam, money) etc.</p>
                    <p>{this.state.badWord ? 'found bad words' : null}</p>
                </div>
                <button type="submit" className="primary">
                    SAVE
                </button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article)),
        postData: article => dispatch(postData(article))
    }
}

export default connect(null, mapDispatchToProps)(AddArticle);