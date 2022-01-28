import React, { useContext, useState, useRef } from "react";
import classes from "./AddGameForm.module.css";
import Button from "../UI/Button/Button";
import Cart from "../UI/Cart/Cart";
import BG from "../UI/BG/BG";
import { AuthContext } from "../../store/auth-context";
import { UsersContext } from "../../store/users-context";
import { GamesContext } from "../../store/games-context";

const AddGameForm = (props) => {
  const authCtx = useContext(AuthContext);
  const usersCtx = useContext(UsersContext);
  const gamesCtx = useContext(GamesContext);

  const [inputTitle, setInputTitle] = useState("");
  const inputEnemyRef = useRef();

  const changeTitleHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (inputTitle.trim() === "" || inputEnemyRef.current.value.trim() === "") {
      return;
    }

    let enemyUId = inputEnemyRef.current.value;

    let player = usersCtx.users.find(item => item.uId === authCtx.uId);
    let enemy = usersCtx.users.find(item => item.uId === enemyUId);

    let newGame = {
      title: inputTitle,
      players: [
        {
          uId: player.uId,
          name: player.name,
          count: 0,
          img: "https://www.gravatar.com/avatar/615553a2d9d4ed6616efed5b68e83fe2?d=wavatar&s=256",
        },
        {
          uId: enemy.uId,
          name: enemy.name,
          count: 0,
          img: "https://www.gravatar.com/avatar/615553a2d9d4ed6616efed5b68e83fe2?d=wavatar&s=256",
        },
      ],
    };

    gamesCtx.addGame(newGame);
    setInputTitle("");
    props.onClose();
  };

  let users = usersCtx.users.filter((item) => item.uId !== authCtx.uId);

  return (
    <BG>
      <Cart>
        <form onSubmit={submitHandler} className={classes.form}>
          <div>
            <label htmlFor="name">Напиши название</label>
            <input
              type="text"
              id="name"
              value={inputTitle}
              onChange={changeTitleHandler}
            />
          </div>
          <div>
            <label htmlFor="enemy">Выбери врага</label>
            <select ref={inputEnemyRef} type="text" id="enemy">
              {users.map((enemy) => (
                <option key={enemy.uId} value={enemy.uId}>
                  {enemy.name}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.actions}>
            <Button onClick={props.onClose}>Отмена</Button>
            <Button>Добавить игру</Button>
          </div>
        </form>
      </Cart>
    </BG>
  );
};

export default AddGameForm;

const ENEMYS_DYMMY = [
  {
    name: "Lenar",
    img: "https://www.gravatar.com/avatar/615553a2d9d4ed6616efed5b68e83fe2?d=wavatar&s=256",
  },
  {
    name: "Николай",
    img: "https://www.gravatar.com/avatar/615553a2d9d4ed6616efed5b68e83fe2?d=wavatar&s=256",
  },
];
