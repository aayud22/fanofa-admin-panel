import axios from "axios";

const API_BASE_URL = "https://your-api-base-url.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add token or other headers if needed
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle errors globally
//     return Promise.reject(error);
//   }
// );

export const get = (url, params) =>
  axiosInstance.get(url, { params }).then((response) => response.data);

export const post = (url, data) =>
  axiosInstance.post(url, data).then((response) => response.data);

export default axiosInstance;
