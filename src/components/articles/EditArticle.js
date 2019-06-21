import React from 'react';
import {connect} from "react-redux";
import {editData} from '../../actions/index';

class EditArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.article.id,
            title: this.props.article.title,
            author: this.props.article.author,
            badWord: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = this.state.id;
        const title = this.state.title;
        const author = this.state.author;
        this.setState({title: "", author: ""});
        this.props.editData({id, title, author});
        this.props.stateHandler();
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
                    Update
                </button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editData: article => dispatch(editData(article))
    }
}

export default connect(null, mapDispatchToProps)(EditArticle);