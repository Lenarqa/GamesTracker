import React, { Fragment, useState, useContext } from "react";
import classes from "./MainPage.module.css";

import AddGameForm from "../components/Game/AddGameForm";
import GameList from "../components/Game/GameList";

import Button from "../components/UI/Button/Button";
import Cart from "../components/UI/Cart/Cart";
import Header from "../components/UI/Header/Header";

import { GamesContext } from "../store/games-context";

const MainPage = (props) => {
  const [isAddGame, setIsAddGame] = useState(false);
  const gamesCtx = useContext(GamesContext);
  
  const addGameHandler = () => {
    setIsAddGame((prevState) => !prevState);
  };

  const closeModalHandler = () => {
    setIsAddGame(false);
  }

  
  let listContent = <h2>Ооо нет, у вас еще нет игр! Добавьте их скорее!</h2>;
  if(gamesCtx.games.length > 0) {
    listContent = <GameList games={gamesCtx.games} />;
  } 

  return (
    <Fragment>
      <Header />
      <Cart>
        <Button onClick={addGameHandler}>Add game</Button>
      </Cart>
      {isAddGame && <AddGameForm onClose={closeModalHandler}/>}
      <Cart>
        {listContent}
      </Cart>
    </Fragment>
  );
};

export default MainPage;
