import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage,setLocalStorage } from "../utils/localStorage";



export const Context = createContext();
const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState()

  useEffect(() => {
    const {employees,admin}=getLocalStorage();
    setUserData({employees,admin});
  },[])
  

  return (
    <Context.Provider value={userData}>
      <div>{children}</div>
    </Context.Provider>
  );
};

export default AuthContext;
