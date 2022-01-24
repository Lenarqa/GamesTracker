import React from "react";
import Button from "../components/UI/Button/Button";
import Cart from "../components/UI/Cart/Cart";
import classes from "./AuthPage.module.css";

const AuthPage = (props) => {
    
  return (
    <section className={classes.authSection}>
      <div className={classes.authForm}>
        <Button>Войти</Button>
        <Button>Регистрация</Button>
      </div>
    </section>
  );
};

export default AuthPage;
