// slices/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productData: {
    name:"",
    description:"",
    price:"",
    image:""
  }
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductData: (state, action) => {
      console.log(action.payload);
      state.productData = action.payload;
    }
  },
});

export const { setProductData } = productSlice.actions;
export default productSlice.reducer;
