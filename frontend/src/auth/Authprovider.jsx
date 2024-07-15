import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const envID = import.meta.env.VITE_ID.toString();

  console.log(envID);

  const initailAuth = localStorage.getItem("ID");
  const [authUser, setAuthUser] = useState(initailAuth == envID ? initailAuth : undefined);

  return <AuthContext.Provider value={[authUser, setAuthUser]}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
