import axiosInstance from './axiosController';

export const createProduct = async(payload) => {
  try {
    const response = await axiosInstance.post('/create-product');
    return {status: "success", data: response};
  } catch (error) {
    console.error(error);
    return {status: "error", data: null};
  }
}

