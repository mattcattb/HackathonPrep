import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:`http://localhost:${process.env.SERVER_PORT}/api`,
  withCredentials: true
});