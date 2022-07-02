import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://mern-netflix-2023.herokuapp.com/api/"
})