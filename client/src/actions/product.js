import axios from 'axios';
import axiosInstance from './axiosController';

export const createProduct = async(payload) => {
  try {
    console.log("create " ,payload);
    const response = await axios.post('http://localhost:5000/api/create-product',payload);
    console.log(response);
    return {status: "success", data: response};
  } catch (error) {
    console.error(error);
    return {status: "error", data: null};
  }
}

