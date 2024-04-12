import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8082/api',
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
  }
});
instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);
export default instance;