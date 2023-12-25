import axios from "axios";

const baseURL = 'proyecto-dl-production.up.railway.app/api' || "http://localhost:3000/api";

const client = axios.create({
  baseURL,
  withCredentials: true
});

export default client;