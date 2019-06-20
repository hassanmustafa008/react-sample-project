import {createStore, applyMiddleware} from 'redux';
import appReducers from "../reducers";
import articlesReducer from '../reducers/articlesReducer';
import counterReducer from '../reducers/counterReducer';
import {forbiddenWordsMiddleware} from '../middleware';
import thunk from "redux-thunk";

const store = createStore(articlesReducer, applyMiddleware(forbiddenWordsMiddleware, thunk));
export default store;