import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger)
}

const configureStore = () => createStore(rootReducer, applyMiddleware(...middlewares));

export default configureStore
