import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';            // <-- named import
import { createLogger } from 'redux-logger';

import authReducer from './authSlice';
// ileride eklersin
// import { clientReducer } from './client/client.reducer';
// import { productReducer } from './product/product.reducer';
// import { cartReducer } from './cart/cart.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // client: clientReducer,
  // product: productReducer,
  // cart: cartReducer,
});

const logger = createLogger({ collapsed: true });

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
