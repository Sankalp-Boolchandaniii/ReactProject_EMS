import React, { createContext, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // useEffect(() => {
  //   setLocalStorage();
  //   console.log(getLocalStorage());
  // });

  return (
    <div>
      <AuthContext.Provider value={"Sankalp"}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
