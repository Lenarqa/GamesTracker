import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BG from "../UI/BG/BG";
import Button from "../UI/Button/Button";
import Cart from "../UI/Cart/Cart";
import classes from "./RegistrationForm.module.css";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../store/auth-context";

const RegistrationForm = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

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
    <BG>
      <Cart>
        <h2>Регистрация</h2>
        <Button onClick={googleSignInHandler}>Гугл</Button>
      </Cart>
    </BG>
  );
};

export default RegistrationForm;
