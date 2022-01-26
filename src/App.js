import "./App.css";
import React, { useContext } from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { AuthContext } from "./store/auth-context";


function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={authCtx.isLogin ? <Navigate to="/games"/> : <Navigate to="/auth"/>} />
        <Route path="/games" element={authCtx.isLogin ? <MainPage /> : <Navigate to="/auth"/>} />
        <Route path="/games" element={<MainPage />} />
        <Route path="/auth" element={authCtx.isLogin ? <Navigate to="/"/> : <AuthPage />} />
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
