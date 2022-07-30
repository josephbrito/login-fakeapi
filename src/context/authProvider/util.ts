import { api } from "../../services/api";
import { IUser } from "./types";

export const setLocalStorage = (user: IUser | null) => {
  localStorage.setItem("u", JSON.stringify(user));
};

export const getLocalStorage = () => {
  const data = localStorage.getItem("u");

  if (!data) {
    return null;
  }

  const user = JSON.parse(data);

  return user ?? null;
};

export const LoginReq = async (email: string, password: string) => {
  try {
    const request = await api.post("login", { email, password });

    return request.data;
  } catch (error) {
    return null;
  }
};
