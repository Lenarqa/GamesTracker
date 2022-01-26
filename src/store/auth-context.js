import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLogin: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const localToken = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(false);
  
  useEffect(()=>{
    setIsLogin(!!localToken);
  },[localToken]);

  const [token, setToken] = useState(localToken);

  const loginHandler = (token) => {
    setToken(token);
    setIsLogin(true);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    setIsLogin(false);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLogin: isLogin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
