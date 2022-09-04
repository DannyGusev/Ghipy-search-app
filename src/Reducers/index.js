import listReducer from './list';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    list: listReducer
});

export default allReducers;