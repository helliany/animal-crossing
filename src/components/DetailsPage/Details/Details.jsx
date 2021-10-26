import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../../../redux/itemReducer";
import Icon from "../../common/Icon/Icon";
import classes from "./Details.module.scss";
import Card from "../../common/Card/Card";
import BellsImage from "../../../assets/images/bells.png";
import {useHistory} from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import Error from "../../common/Error/Error";
import ButtonBack from "../../common/ButtonBack/ButtonBack";

const Details = ({data}) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.item.item);
  const [itemData, setItemData] = useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getItem(data.url));
        setIsLoading(false);
      } catch(err) {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();
  }, [dispatch, data.url]);

  useEffect(() => {
    setItemData(item);
  }, [item]);

  return (
    <div className={classes.wrapper}>
      {isError && !isLoading && <Error />}
      {isLoading && !isError && <Loader />}
      {!isLoading && !isError && (
        <>
          <ButtonBack handleClick={history.goBack} />
          {Object.entries(itemData).length !== 0 && (
            <Card>
              <h2 className={classes.title}>{itemData.name.nameUSen}</h2>
              <Icon>
                <img src={itemData.iconUri} alt=""/>
              </Icon>
              <p className={classes.imageWrapper}>
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
        </>
      )}
    </div>
  );
};

export default Details;
