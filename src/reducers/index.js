import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import articlesReducer from './articlesReducer';

const appReducers = combineReducers({counterReducer, articlesReducer});

export default appReducers;