import * as actionTypes from "../actions/ActionType";

const initialState = {
    articles: [{id: 0, title: "First time writing an article", author: "dummy"}]
};

function articlesReducer(state = initialState, action) {
    if (action.type === actionTypes.ADD_ARTICLE_LOCAL) {
        return Object.assign({}, state, {articles: state.articles.concat(action.payload)});
    }
    if (action.type === actionTypes.GET_ARTICLES) {
        return Object.assign({}, state, {articles: state.articles.concat(action.payload)});
    }
    if (action.type === actionTypes.ADD_ARTICLES_REMOTE) {
        return Object.assign({}, state, {articles: state.articles.concat(action.payload)});
    }
    if (action.type === actionTypes.EDIT_ARTICLE) {
        let index = 0;
        for (let obj in state.articles) {
            if (state.articles[obj].id === action.payload.id) {
                index = +obj;
            }
        }
        return Object.assign({}, state, {articles: state.articles.slice(0, index).concat(action.payload).concat(state.articles.slice(index + 1))});
    }
    if (action.type === actionTypes.DELETE_ARTICLE) {
        for (let obj in state.articles) {
            if (state.articles[obj].id === action.payload.id) {
                state.articles.splice(obj, 1);
            }
        }
        return Object.assign({}, state, {articles: state.articles.slice(0, state.articles.length)});
    }
    if (action.type === actionTypes.FOUND_BAD_WORD) {
        return Object.assign({}, state, {articles: state.articles.concat(action.payload)});
    }
    return state;
}

export default articlesReducer;