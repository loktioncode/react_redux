import CounterReducer from './counter';
import isLoggedReducer from './auth';

import {combineReducers} from 'redux';

const allReducers =combineReducers({
    counter: CounterReducer,
    isLogged: isLoggedReducer
});

export default allReducers;


