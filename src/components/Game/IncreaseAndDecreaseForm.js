import React, { Fragment, useState } from "react";
import classes from "./IncreaseAndDecreaseForm.module.css";
import Button from "../UI/Button/Button";
import BG from "../UI/BG/BG";
import Cart from "../UI/Cart/Cart";
import ChooseWinnerForm from "./ChooseWinnerForm";

const IncreaseAndDecreaseForm = (props) => {
  const [isOpenChooseForm, setIsOpenChooseForm] = useState(false);
  const [isIncrease, setIsIncrease] = useState(false);

  const toggleHandler = (isIncreaseValue) => {
    setIsIncrease(isIncreaseValue);
    setIsOpenChooseForm((prevState) => !prevState);
  };

  return (
    <Fragment>
      <BG>
        {!isOpenChooseForm && (
          <Cart>
            <div className={classes.increaseForm}>
              <h2>Что делаем?</h2>
              <Button onClick={toggleHandler.bind(null, true)}>
                Прибавить
              </Button>
              <Button onClick={toggleHandler.bind(null, false)}>
                Уменьшить
              </Button>
              <div className={classes.close} onClick={props.onClose}></div>
            </div>
          </Cart>
        )}
        {isOpenChooseForm && (
          <ChooseWinnerForm
            isIncrease={isIncrease}
            onClose={props.onClose}
            gameKey={props.gameKey}
            players={props.players}
          />
        )}
      </BG>
    </Fragment>
  );
};

export default IncreaseAndDecreaseForm;
