import { combineReducers } from 'redux';
import { reducer } from "./Test/reducers"
import { tasksReducer } from "./Todo/reducers"

export const rootReducer = combineReducers({
    counter: reducer,
    todo: tasksReducer
});