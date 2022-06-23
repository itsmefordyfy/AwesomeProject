import axios from 'axios';

const apiClient = axios.create({
  baseURL: '',
  responseType: 'json',
  withCredentials: true,
});

export {apiClient};
