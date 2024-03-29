import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink className={`${classes.link} ${classes.homeLink}`} activeClassName={classes.active} to={"/"}  exact>
          Home
        </NavLink>
        <NavLink className={classes.link} activeClassName={classes.active} to={"/villagers"}>
          Villagers
        </NavLink>
        <NavLink className={classes.link} activeClassName={classes.active} to={"/fish"}>
          Fishes
        </NavLink>
        <NavLink className={classes.link} activeClassName={classes.active} to={"/bugs"}>
          Bugs
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
