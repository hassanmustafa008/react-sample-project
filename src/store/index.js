import {createStore, applyMiddleware} from 'redux';
import articlesReducer from '../reducers/articlesReducer';
import counterReducer from '../reducers/counterReducer';
import reducers from '../reducers/index';
import {forbiddenWordsMiddleware} from '../middleware';
import thunk from "redux-thunk";

const store = createStore(articlesReducer, applyMiddleware(forbiddenWordsMiddleware, thunk));

export default store;