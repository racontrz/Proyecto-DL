import axios from "axios";

const baseURL = import.meta.env.VITE_API_BAKEND || "http://localhost:3000/api";

const client = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default client;