import axios from 'axios';

//homolog: https://homolog.tambasafinanceira.com.br/api
//dev: https://tambasa.centralprojects.net/

const api = axios.create({
  baseURL: 'https://homolog.tambasafinanceira.com.br/api'
})

export default api;