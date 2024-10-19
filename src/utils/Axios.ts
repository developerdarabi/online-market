import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://fakestoreapi.com', // Replace with your API base URL
});

// You can add interceptors here if needed
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally if needed
    return Promise.reject(error);
  }
);

export default axios;
