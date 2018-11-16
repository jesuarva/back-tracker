import { combineReducers } from 'redux';
import data from './data.reducer';
import globalState from './globalState.reducer';

const reducers = combineReducers({ data, globalState });

export default reducers;
