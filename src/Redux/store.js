import { createStore, applyMiddleware, compose } from 'redux'
import { tasksReducer } from './tasksReducer'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(tasksReducer, composeEnhancers(applyMiddleware(thunk)))