import { combineReducers } from 'redux';
import productReducer from './product';
import productListReducer from './productList'
import cartReducer from './cart';

const rootReducer = combineReducers({
  product: productReducer,
  list: productListReducer,
  cart:cartReducer
  // Add more reducers as needed
});

export default rootReducer;
