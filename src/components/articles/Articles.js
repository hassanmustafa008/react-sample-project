import React from 'react';
import List from "./List";
import AddArticle from "./AddArticle";
import Post from "./Posts";

class Articles extends React.Component {
    render() {
        return (
            <div className='articles'>
                <div className='row'>
                    <div className='col-6'>
                        <h4>articles</h4>
                        <List/>
                    </div>
                    <div className='col-6'>
                        <h4>add a new article</h4>
                        <AddArticle/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h4>remote posts</h4>
                        <Post/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Articles;