import React from 'react';
import Icon from "../../common/Icon/Icon";
import Card from "../../common/Card/Card";
import {Link} from "react-router-dom";
import BellsImage from "../../../assets/images/bells.png";
import classes from "./BugCard.module.scss";

const BugCard = ({data: {id, name, price, imageUri, iconUri, availability, catchPhrase}}) => {
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
        <Link to={`/bugs/${id}`}>
          <img src={imageUri} alt={name.nameUSen}/>
        </Link>
      </p>
      <p>{availability.location}</p>
      <p>{catchPhrase}</p>
    </Card>
  );
};

export default BugCard;
