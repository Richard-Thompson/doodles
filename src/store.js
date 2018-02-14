import { createStore, combineReducers, applyMiddleware } from 'redux'
import doodlesReducer from './reducers/doodles.reducer';
import blogReducer from './reducers/blog.reducer';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';

const logger = createLogger();

const reducer = combineReducers({
 doodlesReducer,
 blogReducer
})
const store = createStore(
 reducer,
 applyMiddleware(thunk, logger)
)
export default store;