import {ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, DATA_POSTED} from "../actions/ActionType";

const initialState = {
    articles: [{id: 1, title: "First time writing an article"}],
    remoteArticles: []
};

function articlesReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {articles: state.articles.concat(action.payload)});
    }
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {remoteArticles: state.remoteArticles.concat(action.payload)});
    }
    if (action.type === DATA_POSTED) {
        return Object.assign({}, state, {remoteArticles: state.remoteArticles.concat(action.payload)});
    }
    if (action.type === FOUND_BAD_WORD) {
        return Object.assign({}, state, {remoteArticles: state.remoteArticles.concat(action.payload)});
    }
    return state;
}

export default articlesReducer;