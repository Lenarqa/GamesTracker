import React, { useState, useEffect } from "react";

let initState = {
  games: [],
  addGame: (newGame) => {},
  increaseCount: (gameId, uId) => {},
};

export const GamesContext = React.createContext(initState);

const GamesContextProvider = (props) => {
  const [games, setGames] = useState([]);

  const addGameHandler = (newGame) => {
    fetch(process.env.React_app_firebase_url + "games.json", {
      method: "POST",
      body: JSON.stringify(newGame),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.status) {
          setGames((prevState) => [newGame, ...prevState]);
        }
      })
      .catch((error) => {
        throw new Error("Bad post new game");
      });
  };

  const increaseCountHandler = (gameId, uId) => {
    console.log(gameId, uId);
  }

  initState = {
    games: games,
    addGame: addGameHandler,
    increaseCount: increaseCountHandler,
  };

  useEffect(() => {
    fetch(process.env.React_app_firebase_url + "games.json")
      .then((response) => response.json())
      .then((data) => {
        const fethedGames = [];
        for (const key in data) {
          const fetchedGame = {
            id: data[key].id,
            title: data[key].title,
            players: [
              { 
                uId: data[key].players[0].uId,
                name: data[key].players[0].name,
                img: data[key].players[0].img,
                count: data[key].players[0].count,
              },
              { 
                uId: data[key].players[1].uId,
                name: data[key].players[1].name,
                img: data[key].players[1].img,
                count: data[key].players[1].count,
              }
            ],
          };
          fethedGames.push(fetchedGame);
        }
        setGames(fethedGames);
      });
  }, []);

  return (
    <GamesContext.Provider value={initState}>
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;
