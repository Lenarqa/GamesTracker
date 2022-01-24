import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLogin: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const localToken = localStorage.getItem("token");
  let isLogin = !!localToken;
//   if (localToken) {
//     isLogin = true;
//   }

  const [token, setToken] = useState(localToken);

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
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
