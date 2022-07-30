import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getLocalStorage, LoginReq, setLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  const auth = async (email: string, password: string) => {
    const response = await LoginReq(email, password);

    const payload: IUser = { token: response.token, email };

    setUser(payload);
    setLocalStorage(payload);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        ...user,
        auth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
