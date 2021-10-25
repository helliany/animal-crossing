import React from 'react';
import Card from "../../common/Card/Card";
import Icon from "../../common/Icon/Icon";
import {Link} from "react-router-dom";

const VillagersCard = ({data: {id, name, species, imageUri, iconUri, saying}}) => {
  return (
    <Card>
      <h2>{name.nameUSen}</h2>
      <Icon>
        <img src={iconUri} alt=""/>
      </Icon>
      <p>{species}</p>
      <p>
        <Link to={`/villagers/${id}`}>
          <img src={imageUri} alt={name.nameUSen}/>
        </Link>
      </p>
      <p>{saying}</p>
    </Card>
  );
};

export default VillagersCard;
