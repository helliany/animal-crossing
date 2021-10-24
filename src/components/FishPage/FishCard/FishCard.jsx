import React from 'react';
import Icon from "../../common/Icon/Icon";
import Card from "../../common/Card/Card";

const FishCard = ({data: {name, price, image_uri, icon_uri, availability}}) => {
  return (
    <Card>
      <h2>{name['name-USen']}</h2>
      <Icon>
        <img src={icon_uri} alt={name['name-USen']}/>
      </Icon>
      <p>{price} Bells</p>
      <img src={image_uri} alt={name['name-USen']}/>
      <p>{availability.location}</p>
    </Card>
  );
};

export default FishCard;
