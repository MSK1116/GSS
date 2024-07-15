import React, { createContext, useContext, useState, useEffect } from "react";
import bcryptjs from "bcryptjs";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(undefined);

  useEffect(() => {
    const initializeAuth = async () => {
      const envID = import.meta.env.VITE_ID;

      const storedUser = localStorage.getItem("ID");

      if (envID == storedUser) {
        setAuthUser(JSON.parse(storedUser));
      }
    };

    initializeAuth();
  }, []);

  return <AuthContext.Provider value={[authUser, setAuthUser]}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
