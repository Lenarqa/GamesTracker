import classes from "./RegistrationForm.module.css";
import React, { useContext } from "react";
import BG from "../UI/BG/BG";
import Button from "../UI/Button/Button";
import Cart from "../UI/Cart/Cart";
import { AuthContext } from "../../store/auth-context";
import {useNavigate} from "react-router-dom";

const RegistrationForm = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const googleSignInHandler = () => {
    // const firebaseConfigy = JSON.parse(process.env.React_app_FIREBASE_CONFIG);
  };

  return (
    <BG>
      <Cart>
        <h2>Регистрация</h2>
        <Button onClick={googleSignInHandler}>Гугл</Button>
      </Cart>
    </BG>
  );
};

export default RegistrationForm;
