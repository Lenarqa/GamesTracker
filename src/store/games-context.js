import React, { useState, useEffect } from "react";

let initState = {
  games: [],
  addGame: (newGame) => {},
};

export const GamesContext = React.createContext(initState);

const GamesContextProvider = (props) => {
  const [games, setGames] = useState(DUMMY_GAMES);

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

  initState = {
    games: games,
    addGame: addGameHandler,
  };

  useEffect(() => {
    fetch(process.env.React_app_firebase_url + "games.json")
      .then((response) => response.json())
      .then((data) => {
        const fethedGames = [];
        for (const key in data) {
          const fetchedGame = {
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

const DUMMY_GAMES = [
  {
    title: "Каркассон",
    players: [
      {
        uId: "1234",
        name: "Ленар",
        count: 1,
        img: "https://www.gravatar.com/avatar/615553a2d9d4ed6616efed5b68e83fe2?d=wavatar&s=256",
      },
      {
        uId: "1234",
        name: "Николай",
        count: 2,
        img: "https://habrastorage.org/webt/5a/ba/4c/5aba4c6245e9e423325125.jpeg",
      },
    ],
  },
  {
    title: "Опал",
    players: [
      {
        uId: "1234",
        name: "Ленар",
        count: 3,
        img: "https://www.gravatar.com/avatar/615553a2d9d4ed6616efed5b68e83fe2?d=wavatar&s=256",
      },
      {
        uId: "1234",
        name: "Николай",
        count: 1,
        img: "https://habrastorage.org/webt/5a/ba/4c/5aba4c6245e9e423325125.jpeg",
      },
    ],
  },
];
