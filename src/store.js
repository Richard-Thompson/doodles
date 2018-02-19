import { createStore, combineReducers, applyMiddleware } from 'redux'
import doodlesReducer from './reducers/doodles.reducer';
import blogReducer from './reducers/blog.reducer';
import contentReducer from './reducers/content.reducer';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';

const logger = createLogger();

const reducer = combineReducers({
 doodlesReducer,
 blogReducer,
 contentReducer
})
const store = createStore(
 reducer,
 applyMiddleware(thunk, logger)
)
export default store;