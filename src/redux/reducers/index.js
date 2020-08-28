import products from './products';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products: products
});

export default rootReducer;