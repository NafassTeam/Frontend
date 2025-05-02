import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api.com', // optional if using full URLs
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default instance;
