import React from "react";
import classes from "./AddGameForm.module.css";
import Button from "../UI/Button/Button";
import Cart from "../UI/Cart/Cart";
import BG from "../UI/BG/BG";

const AddGameForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit");
  };
  return (
    <BG>
      <Cart>
        <form onSubmit={submitHandler} className={classes.form}>
          <div>
            <label htmlFor="name">Напиши название</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="enemy">Выбери врага</label>
            <select type="text" id="enemy">
              {ENEMYS_DYMMY.map((enemy) => (
                <option
                  style={{ backgroundImage: `url(${enemy.img})` }}
                  key={enemy.name}
                >
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
