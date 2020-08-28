import products from './products';
import categories from './categories'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products: products,
  categories: categories
});

export default rootReducer;