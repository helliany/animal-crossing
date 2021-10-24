import React, {useCallback, useEffect, useState} from 'react';
import classes from "../../VillagersPage/Villagers/Villagers.module.scss";
import FishCard from "../FishCard/FishCard";
import {useDispatch, useSelector} from "react-redux";
import {getFishes} from "../../../redux/fish-reducer";

const Fishes = () => {
  const dispatch = useDispatch();
  const fishes = useSelector(state => state.fishes.fishes);
  const [fishesData, setFishesData] = useState(fishes);

  useEffect(() => {
    dispatch(getFishes());
  }, [dispatch]);

  useEffect(() => {
    setFishesData(fishes.slice(0, 10));
  }, [fishes]);


  // функция "доклеивающая" элементы массива
  const appendItems = useCallback(() => {
    setFishesData([
      ...fishesData,
      ...fishes.slice(fishesData.length, fishesData.length + 10)
    ]);
  }, [fishes, fishesData, setFishesData]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.cardsWrapper}>
        {fishesData.map((item) => (
          <FishCard key={item.id} data={item} />
        ))}
      </div>
      <button className={classes.button} onClick={appendItems}>Show More</button>
    </div>
  );
};

export default Fishes;
