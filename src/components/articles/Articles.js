import React from 'react';
import List from "../common/custom-list/List";
import AddArticle from "./AddArticle";
import {connect} from "react-redux";
import {getData, deleteData} from '../../actions/index';
import EditArticle from "./EditArticle";

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cols: ["id", "title", "author"], edit: false};
        this.editRow = this.editRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.stateHandler = this.stateHandler.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    editRow(article) {
        this.setState({edit: true, article: article});
    }

    deleteRow(id) {
        this.props.deleteData(id);
    }

    stateHandler() {
        this.setState({edit: false});
    }

    render() {
        return (
            <div className='articles'>
                <div className='row'>
                    <div className='col-6'>
                        <h4>articles</h4>
                        <List cols={this.state.cols} list={this.props.articles} editRow={this.editRow}
                              deleteRow={this.deleteRow}/>
                    </div>
                    <div className='col-6'>
                        {this.state.edit ? (
                            <div>
                                <h4>update article</h4><EditArticle article={this.state.article}
                                                                    stateHandler={this.stateHandler}/>
                            </div>
                        ) : (
                            <div><h4>add a new article</h4><AddArticle/></div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

export default connect(mapStateToProps, {getData, deleteData})(Articles);