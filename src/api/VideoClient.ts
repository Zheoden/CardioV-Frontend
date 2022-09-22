import axios from 'axios';

const client = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL ?? '' });
client.interceptors.request.use(async config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      ...(config.headers ?? {}),
    };
  }
  return config;
});

export default client;
