import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:44300'
}) //Cria o objeto de conexão com a API

export default api