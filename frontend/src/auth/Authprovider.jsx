import React, { createContext, useContext, useState, useEffect } from "react";
import bcryptjs from "bcryptjs";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(undefined);

  useEffect(() => {
    const initializeAuth = async () => {
      const envPwd = import.meta.env.VITE_PASSWORD;
      const storedHashPwd = localStorage.getItem("HASHPWD");
      const storedUser = localStorage.getItem("ID");

      if (storedHashPwd && envPwd) {
        const isValid = await bcryptjs.compare(envPwd, storedHashPwd);
        if (isValid) {
          setAuthUser(JSON.parse(storedUser));
        }
      }
    };

    initializeAuth();
  }, []);

  return <AuthContext.Provider value={[authUser, setAuthUser]}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
