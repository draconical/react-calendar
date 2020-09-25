import { createStore, combineReducers } from 'redux';
import calendarReducer from './calendarReducer';

let reducers = combineReducers({
    calendar: calendarReducer
})

let store = createStore(reducers);

window.store = store;

export default store;