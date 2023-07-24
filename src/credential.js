import axios from 'axios';

const authToken = localStorage.getItem('authToken');

const axiosInstance = axios.create({
  baseURL: 'YOUR_RAILS_API_BASE_URL',
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

export default axiosInstance;
