import React from 'react';
import Icon from "../../common/Icon/Icon";
import Card from "../../common/Card/Card";
import RiverIcon from "../../../assets/images/river.png";
import PondIcon from "../../../assets/images/pond.png";
import classes from "./FishCard.module.scss";
import {Link} from "react-router-dom";
import BellsImage from "../../../assets/images/bells.png";

const FishCard = ({data: {id, name, price, imageUri, iconUri, availability, catchPhrase}}) => {
  return (
    <Card>
      <h2>{name.nameUSen}</h2>
      <Icon>
        <img src={iconUri} alt=""/>
      </Icon>
      <div className={classes.price}>
        {price}
        <img src={BellsImage} alt=""/>
      </div>
      <p className={classes.imageWrapper}>
        <Link to={`/fish/${id}`}>
          <img src={imageUri} alt={name.nameUSen}/>
        </Link>
      </p>
      <div className={classes.wrapper}>
        <div className={classes.location}>
          <img src={availability.location === 'River' ? RiverIcon : PondIcon} alt="Location"/>
        </div>
        <p>{catchPhrase}</p>
      </div>
    </Card>
  );
};

export default FishCard;
