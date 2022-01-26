import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/Auth/RegistrationForm";
import Button from "../components/UI/Button/Button";
import classes from "./AuthPage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../store/auth-context";

const AuthPage = (props) => {
  const [isSingIn, setSignIn] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const registrationHandler = () => {
    setSignIn((prevState) => !prevState);
  };

  const googleSignInHandler = () => {
    const firebaseConfigy = JSON.parse(process.env.React_app_FIREBASE_CONFIG);

    const app = initializeApp(firebaseConfigy);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        authCtx.login(token);
        navigate("/games");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className={classes.authSection}>
      <div className={classes.authForm}>
        <Button>Войти</Button>
        <Button onClick={registrationHandler}>Регистрация</Button>
        <FontAwesomeIcon className={classes.icon} icon={faGoogle} onClick={googleSignInHandler} />
      </div>
      {isSingIn && <RegistrationForm />}
    </section>
  );
};

export default AuthPage;
