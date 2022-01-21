import React from "react";
import classes from "./Game.module.css";

const Game = (props) => {
  const openGameHandler = () => {
    console.log("Open game handler");
  };

  return (
    <li className={classes.game} onClick={openGameHandler}>
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
  );
};

export default Game;
