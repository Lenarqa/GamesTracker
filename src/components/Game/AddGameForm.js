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
            <label htmlFor="name">Game title</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="enemy">Your enemy</label>
            <select type="text" id="enemy">
              {ENEMYS_DYMMY.map((enemy) => (
                <option key={enemy.name}>{enemy.name}</option>
              ))}
            </select>
          </div>
          <div className={classes.actions}>
            <Button onClick={props.onClose}>Cancel</Button>
            <Button>Add Game</Button>
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
  },
  {
    name: "Николай",
  },
];
