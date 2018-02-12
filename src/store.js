import { createStore, combineReducers, applyMiddleware } from 'redux'
import doodlesReducer from './reducers/doodles.reducer';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';

const logger = createLogger();

const reducer = combineReducers({
 doodlesReducer
})
const store = createStore(
 reducer,
 applyMiddleware(thunk, logger)
)
export default store;