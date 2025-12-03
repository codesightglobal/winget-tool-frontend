import axios from "axios";

console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);

const api = axios.create({
  baseURL: "http://jog4wogs4okwo40s0880wcsg.51.11.178.0.sslip.io/api",
  timeout: 10000,
});

export default api;
