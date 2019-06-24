import React from 'react';
import List from "../common/custom-list/List";
import AddArticle from "./AddArticle";
import {connect} from "react-redux";
import {getData, deleteData} from '../../actions/index';
import EditArticle from "./EditArticle";
import {Ability, AbilityBuilder} from "@casl/ability";
import {Can} from "@casl/react";

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: ["id", "title", "author"],
            ability: this.defineAbilityFor({isAdmin: true}),
            edit: false
        };
        this.editRow = this.editRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.stateHandler = this.stateHandler.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    defineAbilityFor(user) {
        const {rules, can, cannot} = AbilityBuilder.extract();
        if (user.isAdmin) {
            can(['read', 'write', 'delete'], ['list', 'article']);
        } else if (user.isSupervisor) {
            can(['read', 'write'], ['list', 'article']);
        } else {
            can('read', 'list');
            // can('manage', 'post', {author: 'me'});
            // cannot('delete', 'post');
        }
        return new Ability(rules);
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
        debugger;
        return (
            <div className='articles'>
                <div className='row'>
                    <div className='col-6'>
                        <Can I='read' a='list' ability={this.state.ability}>
                            <h4>articles</h4>
                            <List cols={this.state.cols} list={this.props.articles} editRow={this.editRow}
                                  deleteRow={this.deleteRow} ability={this.state.ability}/>
                        </Can>
                    </div>
                    <div className='col-6'>
                        <Can I='write' a='article' ability={this.state.ability}>
                            {this.state.edit ? (
                                <div>
                                    <h4>update article</h4>
                                    <EditArticle article={this.state.article} stateHandler={this.stateHandler}
                                                 ability={this.state.ability}/>
                                </div>
                            ) : (
                                <div><h4>add a new article</h4><AddArticle/></div>
                            )}
                        </Can>
                    </div>
                </div>
            </div>
        )
    }
}

const
    mapStateToProps = state => {
        return {
            articles: state.articles
        };
    };

export default connect(mapStateToProps, {getData, deleteData})

(
    Articles
)
;