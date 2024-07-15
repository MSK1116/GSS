import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const envID = import.meta.env.VITE_ID;
  const initailAuth = localStorage.getItem("ID");
  const [authUser, setAuthUser] = useState(initailAuth == envID ? JSON.parse(initailAuth) : undefined);
  console.log(authUser);
  return <AuthContext.Provider value={[authUser, setAuthUser]}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
