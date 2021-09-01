import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tambasa.centralprojects.net/'
})

export default api;