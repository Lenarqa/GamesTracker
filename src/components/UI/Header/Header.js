import React, { useState, useContext } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { AuthContext } from "../../../store/auth-context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOptinMonster } from "@fortawesome/free-brands-svg-icons";

const Header = (props) => {
  const authCtx = useContext(AuthContext);

  const [isShow, setIsShow] = useState(false);
  const toggleMenu = (props) => {
    setIsShow((prevState) => !prevState);
  };


  return (
    <header className={classes.header}>
      <FontAwesomeIcon
        className={classes.icon}
        icon={faOptinMonster}
        onClick={toggleMenu}
      />
      {isShow && (
        <nav>
          <ul>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : " "
                }
                to="/games"
              >
                Список игр
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : " "
                }
                to="/profile"
              >
                Профиль
              </NavLink>
            </li>
          </ul>
          <div className={classes.activity}>
            <Button onClick={authCtx.logout}>Выход</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
