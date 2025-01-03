import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage,setLocalStorage } from "../utils/localStorage";



export const Context = createContext();
const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState()

  useEffect(() => {
    const {employees}=getLocalStorage();
    setUserData(employees);
  },[])
  

  return (
    <Context.Provider value={[userData,setUserData]}>
      <div>{children}</div>
    </Context.Provider>
  );
};

export default AuthContext;
