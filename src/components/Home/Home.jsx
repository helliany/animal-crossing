import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Home.module.scss";
import Image from "../../assets/images/home.png";

const Home = () => {
  return (
    <div>
      <h1>Welcome To Animal Crossing!</h1>
      <img className={classes.image} src={Image} alt=""/>
      <nav className={classes.nav}>
        <Link to={"/villagers"} className={classes.link}>Villagers</Link>
        <Link to={"/fishes"} className={classes.link}>Fishes</Link>
      </nav>
    </div>
  );
};

export default Home;
