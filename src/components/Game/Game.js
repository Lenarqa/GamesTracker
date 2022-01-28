import React, { Fragment } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./Game.module.css";
import IncreaseAndDecreaseForm from "./IncreaseAndDecreaseForm";

const Game = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const toggleFormHandler = () => {
    setOpenForm(prevState => !prevState);
  }

  return (
    <Fragment>
      <li className={classes.game} onClick={toggleFormHandler}>
        <h2 className={classes.gameTitle}>{props.title}</h2>
        <h2 className={classes.gameVs}>VS</h2>
        <section className={classes.gameInfo}>
          <div className={classes.player1}>
            <img src={props.players[0].img} alt="картинка игрока" />
            <h2>{props.players[0].name}</h2>
            <h2>{props.players[0].count}</h2>
          </div>
          <div className={classes.player2}>
            <img src={props.players[1].img} alt="картинка игрока" />
            <h2>{props.players[1].name}</h2>
            <h2>{props.players[1].count}</h2>
          </div>
        </section>
      </li>
      {openForm && <IncreaseAndDecreaseForm players={props.players}  onClose={toggleFormHandler}/>}
    </Fragment>
  );
};

export default Game;
