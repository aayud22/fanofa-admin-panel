import axios from 'axios';
import API_CONSTANTS from '../../constants/apiEndpoints';

const axiosInstance = axios.create({
  baseURL: API_CONSTANTS.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*', // Allow cross-origin requests
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
});

// const axiosInstance = axios.create({
//   baseURL: API_CONSTANTS.BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// Request Interceptor: Attach Token to Requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle Errors Globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // Change as per your routing
      }
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

// Reusable API Functions
export const get = async (url, params) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default axiosInstance;
