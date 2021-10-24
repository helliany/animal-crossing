import React from 'react';
import Card from "../../common/Card/Card";
import Icon from "../../common/Icon/Icon";

const VillagersCard = ({data: {name, species, image_uri, icon_uri, saying}}) => {
  return (
    <Card>
      <h2>{name['name-USen']}</h2>
      <Icon>
        <img src={icon_uri} alt={name['name-USen']}/>
      </Icon>
      <p>{species}</p>
      <img src={image_uri} alt={name['name-USen']}/>
      <p>{saying}</p>
    </Card>
  );
};

export default VillagersCard;
