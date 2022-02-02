import React, { Fragment, useState } from "react";
import classes from "./IncreaseAndDecreaseForm.module.css";
import Button from "../UI/Button/Button";
import BG from "../UI/BG/BG";
import FormCart from "../UI/FormCart/FormCart";
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
      <BG onClose={props.onClose} />
        {!isOpenChooseForm && (
          <FormCart>
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
          </FormCart>
        )}
        {isOpenChooseForm && (
          <ChooseWinnerForm
            isIncrease={isIncrease}
            onClose={props.onClose}
            gameKey={props.gameKey}
            players={props.players}
          />
        )}
    </Fragment>
  );
};

export default IncreaseAndDecreaseForm;
