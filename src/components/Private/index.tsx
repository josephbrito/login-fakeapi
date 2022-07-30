import React from "react";
import { useAuth } from "../../context/authProvider/useAuth";
import { IAuthProvider } from "../../context/authProvider/types";

const Private: React.FC<IAuthProvider> = ({ children }: IAuthProvider) => {
  const { email } = useAuth();

  if (!email) {
    return <h1>You don't have access</h1>;
  }

  return children;
};

export default Private;
