import React, { Fragment, useState, useContext } from "react";

import AddGameForm from "../components/Game/AddGameForm";
import GameList from "../components/Game/GameList";

import Button from "../components/UI/Button/Button";
import Cart from "../components/UI/Cart/Cart";
import Header from "../components/UI/Header/Header";

import { GamesContext } from "../store/games-context";
import { AuthContext } from "../store/auth-context";

const MainPage = (props) => {
  const [isAddGame, setIsAddGame] = useState(false);
  const gamesCtx = useContext(GamesContext);
  const authCtx = useContext(AuthContext);
  
  const addGameHandler = () => {
    setIsAddGame((prevState) => !prevState);
  };

  const closeModalHandler = () => {
    setIsAddGame(false);
  }

  let userGames = gamesCtx.games.filter(game => {
    if(game.players[0].uId === authCtx.uId || game.players[1].uId === authCtx.uId) {
      return game;
    }
  });
  
  let listContent = <h2>Ооо нет, у вас еще нет игр! Добавьте их скорее!</h2>;
  if(userGames.length > 0) {
    listContent = <GameList games={userGames} />;
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
