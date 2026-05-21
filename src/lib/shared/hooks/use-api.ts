import axios from "axios";
import { BACKEND_URL } from "$env/static/private";

export const hookUseAPI = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
