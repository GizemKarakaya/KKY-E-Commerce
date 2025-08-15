import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';            // <-- named import
import { createLogger } from 'redux-logger';

import authReducer from './authSlice';
import clientReducer from '../redux/reducers/clientReducer';
import productReducer from '../redux/reducers/productReducer';
import shoppingCartReducer from '../redux/reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const logger = createLogger({ collapsed: true });

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
