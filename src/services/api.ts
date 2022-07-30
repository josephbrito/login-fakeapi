import axios from "axios";
import { getLocalStorage } from "../context/authProvider/util";

export const api = axios.create({
  baseURL: "https://reqres.in/api/",
});

api.interceptors.request.use(
  (config) => {
    const user = getLocalStorage();

    config.headers!.Authorization = user?.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
