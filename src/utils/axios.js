import axios from "axios";

const API = axios.create({
  // baseURL: "https://basic-shop.onrender.com/",
  baseURL: "https://mongodb-repo-production.up.railway.app/api/v1",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export default API;
