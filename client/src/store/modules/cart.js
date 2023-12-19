// slices/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products:[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.products = [...state.products,action.payload];
        console.log(state.products);
    }
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
