import { combineReducers } from 'redux';
import productReducer from './product';
import productListReducer from './productList'

const rootReducer = combineReducers({
  product: productReducer,
  list: productListReducer,
  // Add more reducers as needed
});

export default rootReducer;
