import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  token: "",
  uId: "",
  isLogin: false,
  login: (token, uId) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const localToken = localStorage.getItem("token");
  const localUId = localStorage.getItem("uId");

  const [isLogin, setIsLogin] = useState(false);
  const [uId, setUserId] = useState(localUId);
  
  useEffect(()=>{
    setIsLogin(!!localToken);
    setUserId(localUId);
  },[localToken]);

  const [token, setToken] = useState(localToken);

  const loginHandler = (token, uId) => {
    setToken(token);
    setIsLogin(true);
    setUserId(uId);
    localStorage.setItem("token", token);
    localStorage.setItem("uId", uId);
  };

  const logoutHandler = () => {
    setToken(null);
    setIsLogin(false);
    setUserId('');
    
    localStorage.removeItem("token");
    localStorage.removeItem("uId");
  };

  const contextValue = {
    token: token,
    uId: uId,
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
