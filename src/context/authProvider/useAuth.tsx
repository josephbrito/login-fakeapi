import { useContext } from "react";
import { AuthContext } from ".";

export const useAuth = () => {
  const { auth, logout, email, token } = useContext(AuthContext);

  return { auth, logout, email, token };
};
