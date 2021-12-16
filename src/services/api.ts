import axios from "axios";

//Informações padrões para todas as requisições
//General information to all requests
export const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
})