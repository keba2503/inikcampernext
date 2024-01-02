// rootReducer.js
import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
    newsDetails: newsReducer,
    blogDetails: blogReducer,
});

export default rootReducer;
