import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default axiosInstance;
