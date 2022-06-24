import axios from "axios";

export const axiosCountry = axios.create({
    baseURL: 'http://localhost:5000/'
});