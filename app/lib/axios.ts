import axios from "axios";

console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000/api",
  timeout: 10000,
});

export default api;
