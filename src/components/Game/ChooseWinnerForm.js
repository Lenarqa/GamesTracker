import React, { useContext } from "react";
import classes from "./ChooseWinnerForm.module.css";
import { GamesContext } from "../../store/games-context";
import FormCart from "../UI/FormCart/FormCart";

const ChooseWinnerForm = (props) => {
  const gamesCtx = useContext(GamesContext);

  const increaseCountHandler = (uId) => {
    gamesCtx.increaseCount(props.gameKey, uId, props.isIncrease);
    props.onClose();
  };

  return (
    <FormCart>
      <div className={classes.gameCart}>
        <h2>Выберите победителя</h2>
        <div className={classes.close} onClick={props.onClose}></div>
        <form className={classes.game}>
          <section className={classes.gameInfo}>
            <div
              className={classes.player1}
              onClick={increaseCountHandler.bind(null, props.players[0].uId)}
            >
              <img src={props.players[0].img} alt="картинка игрока" />
              <h2>{props.players[0].name}</h2>
              <h2>{props.players[0].count}</h2>
            </div>
            <div
              className={classes.player2}
              onClick={increaseCountHandler.bind(null, props.players[1].uId)}
            >
              <img src={props.players[1].img} alt="картинка игрока" />
              <h2>{props.players[1].name}</h2>
              <h2>{props.players[1].count}</h2>
            </div>
          </section>
        </form>
      </div>
    </FormCart>
  );
};

export default ChooseWinnerForm;
