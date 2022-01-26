import "./App.css";
import React, { useContext } from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { AuthContext } from "./store/auth-context";


function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLogin);
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<AuthPage />} /> */}
        <Route path="/" element={authCtx.isLogin ? <Navigate to="/games"/> : <Navigate to="/auth"/>} />
        <Route path="/games" element={authCtx.isLogin ? <MainPage /> : <Navigate to="/auth"/>} />
        <Route path="/games" element={<MainPage />} />
        <Route path="/auth" element={authCtx.isLogin ? <Navigate to="/"/> : <AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
