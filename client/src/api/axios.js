import axios from "axios";

const baseURL = 'https://proyecto-dl-production.up.railway.app/api' || "http://localhost:3000/api";

const client = axios.create({
  baseURL : baseURL,
  withCredentials: true
});

export default client;