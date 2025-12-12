import axios from "axios";

console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);

const api = axios.create({
  baseURL: "https://intunetoolbackend.sistena.co.uk/api",
  timeout: 10000,
});

export default api;
