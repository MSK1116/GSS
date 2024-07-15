import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const envID = import.meta.env.VITE_ID;
  const jsonObj = { envID };
  const ID = JSON.stringify(jsonObj);

  const initailAuth = localStorage.getItem("ID");
  const [authUser, setAuthUser] = useState(initailAuth == ID ? JSON.parse(initailAuth) : undefined);
  console.log(authUser);
  return <AuthContext.Provider value={[authUser, setAuthUser]}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
