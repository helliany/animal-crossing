import React, {useCallback, useEffect, useState} from 'react';
import {getVillagers} from "../../../redux/villagers-reducer";
import {useDispatch, useSelector} from "react-redux";
import VillagersCard from "../VillagersCard/VillagersCard";
import classes from "./Villagers.module.scss";

const Villagers = () => {
  const dispatch = useDispatch();
  const villagers = useSelector(state => state.villagers.villagers);
  const [villagersData, setVillagersData] = useState(villagers);

  useEffect(() => {
    dispatch(getVillagers());
  }, [dispatch]);

  useEffect(() => {
    setVillagersData(villagers.slice(0, 10));
  }, [villagers]);


  // функция "доклеивающая" элементы массива
  const appendItems = useCallback(() => {
    setVillagersData([
      ...villagersData,
      ...villagers.slice(villagersData.length, villagersData.length + 10)
    ]);
  }, [villagers, villagersData, setVillagersData]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.cardsWrapper}>
        {villagersData.map((item) => (
          <VillagersCard key={item.id} data={item} />
        ))}
      </div>
      <button className={classes.button} onClick={appendItems}>Show More</button>
    </div>
  );
};

export default Villagers;
