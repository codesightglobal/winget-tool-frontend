import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL || "http://backend:4000/api/",
  timeout: 5000,
});

export default api;
