import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../../../redux/item-reducer";
import Icon from "../../common/Icon/Icon";
import classes from "./Details.module.scss";
import Card from "../../common/Card/Card";
import BellsImage from "../../../assets/images/bells.png";
import {useHistory} from "react-router-dom";

const Details = ({data}) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.item.item);
  const [itemData, setItemData] = useState({});
  const history = useHistory();

  useEffect(() => {
    dispatch(getItem(data.url));
  }, [dispatch, data.url]);

  useEffect(() => {
    setItemData(item);
  }, [item]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.buttonBackWrapper}>
        <button className={classes.buttonBack} onClick={history.goBack}>{`< Back`}</button>
      </div>
      {Object.entries(itemData).length !== 0 && (
        <Card>
          <h2 className={classes.title}>{itemData.name.nameUSen}</h2>
          <Icon>
            <img src={itemData.iconUri} alt=""/>
          </Icon>
          <p>
            <img src={itemData.imageUri} alt={itemData.name.nameUSen}/>
          </p>
          {itemData.price && (
            <div className={classes.price}>
              {itemData.price}
              <img src={BellsImage} alt=""/>
            </div>
          )}
          {itemData.availability && (
            <p>Is Available At {itemData.availability.location}
              {itemData.availability.time !== "" && ` At ${itemData.availability.time}`}
            </p>
          )}
          {itemData.species && <p>{itemData.species}</p>}
          {itemData.saying && <p>{itemData.saying}</p>}
          {itemData.personality && <p>Personality: {itemData.personality}</p>}
          {itemData.hobby && <p>Hobby: {itemData.hobby}</p>}
          {itemData.birthdayString && <p>Birthday: {itemData.birthdayString}</p>}
          {itemData.museumPhrase && <p className={classes.museumPhrase}>{itemData.museumPhrase}</p>}
        </Card>
      )}
    </div>
  );
};

export default Details;
