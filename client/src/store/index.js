// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules';

const Store = configureStore({
  reducer: rootReducer,
  devTools: true
});


export { Store };