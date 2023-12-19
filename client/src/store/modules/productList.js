// slices/productListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [
    {
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ySFRhc4HgKeI5MZg4s5mB8_-FSdGS1MqMIvb1TqP4Q&s',
      title: 'Laptop',
      description: 'Powerful laptop with high-resolution display and fast processor.',
      price: '$999.99',
    },
    {
      link: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61L1ItFgFHL.jpg',
      title: 'Smartphone',
      description: 'The latest smartphone with a stunning camera and long-lasting battery.',
      price: '$699.99',
    },
    {
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7mT9e23GJsn1yrcCQV91TgaGaOk8KDGbY1_91KgzAw&s',
      title: 'Headphones',
      description: 'Premium noise-canceling headphones for an immersive audio experience.',
      price: '$199.99',
    },
    {
      link: 'https://images.philips.com/is/image/philipsconsumer/72dbb6e1509a4cacb631ad1900d54b9e?wid=420&hei=360&$jpglarge$',
      title: 'Coffee Maker',
      description: 'State-of-the-art coffee maker for brewing your favorite coffee at home.',
      price: '$129.99',
    },
    {
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMYUuAwwHsepv9ZFCakglELdts6cxMfO0v47NkJ-9iQ&s',
      title: 'Fitness Tracker',
      description: 'Track your fitness goals with this advanced fitness tracker.',
      price: '$79.99',
    },
    {
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCXPu5ZRtu6REEVbGU5r2g3Df9lM2x5dcp_2NywILwg&s',
      title: 'Wireless Speaker',
      description: 'Portable wireless speaker with crystal-clear sound and long battery life.',
      price: '$149.99',
    },
    {
      link: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/611Gy0SZvYL._AC_UF1000,1000_QL80_.jpg',
      title: 'Smart Watch',
      description: 'Stay connected and monitor your health with this stylish smartwatch.',
      price: '$249.99',
    },
  ], // Initial state is an empty array
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productList.push(action.payload);
    },
  },
});

export const { addProduct } = productListSlice.actions;
export default productListSlice.reducer;
