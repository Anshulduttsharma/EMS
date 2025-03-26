import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";
import { setLocalStorage } from './../utils/LocalStorage';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
