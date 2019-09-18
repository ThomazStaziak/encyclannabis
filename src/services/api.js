import axios from 'axios';

const api = axios.create({
  baseURL: 'http://strainapi.evanbusse.com/0T2tTzb'
});

export default api;