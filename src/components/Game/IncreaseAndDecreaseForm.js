import React, { Fragment, useState } from "react";
import classes from "./IncreaseAndDecreaseForm.module.css";
import Button from "../UI/Button/Button";
import BG from "../UI/BG/BG";
import Cart from "../UI/Cart/Cart";

const IncreaseAndDecreaseForm = (props) => {
  const [isOpenChooseForm, setIsOpenChooseForm] = useState(false);

  const toggleHandler = (event) => {
    event.preventDefault();
    console.log("increaseHandler");
    setIsOpenChooseForm((prevState) => !prevState);
  };

  return (
    <Fragment>
      <BG>
        {!isOpenChooseForm && (
          <Cart>
            <div className={classes.increaseForm}>
              <h2>Что делаем?</h2>
              <Button onClick={toggleHandler}>Прибавить</Button>
              <Button onClick={toggleHandler}>Уменьшить</Button>
              <div className={classes.close} onClick={props.onClose}></div>
            </div>
          </Cart>
        )}
        {isOpenChooseForm && <p>Hello choose form</p>}
      </BG>
    </Fragment>
  );
};

export default IncreaseAndDecreaseForm;
