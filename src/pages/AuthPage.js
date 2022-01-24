import React from "react";
import { useState } from "react";
import RegistrationForm from "../components/Auth/RegistrationForm";
import Button from "../components/UI/Button/Button";
import classes from "./AuthPage.module.css";

const AuthPage = (props) => {
  const [isSingIn, setSignIn] = useState(false);

  const registrationHandler = () => {
      console.log("Hello");
    setSignIn((prevState) => !prevState);
  };

  return (
    <section className={classes.authSection}>
      <div className={classes.authForm}>
        <Button>Войти</Button>
        <Button onClick={registrationHandler}>Регистрация</Button>
      </div>
      {isSingIn && <RegistrationForm />}
    </section>
  );
};

export default AuthPage;
