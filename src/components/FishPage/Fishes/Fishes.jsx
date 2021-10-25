import React, {useCallback, useEffect, useState} from 'react';
import classes from "../../VillagersPage/Villagers/Villagers.module.scss";
import FishCard from "../FishCard/FishCard";
import {useDispatch, useSelector} from "react-redux";
import {getFishes} from "../../../redux/fish-reducer";
import SearchField from "../../common/SearchField/SearchField";

const Fishes = () => {
  const dispatch = useDispatch();
  const fishes = useSelector(state => state.fishes.fishes);
  const [fishesData, setFishesData] = useState(fishes);
  const [filterValue, setFilterValue] = useState('');

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

  const handleFilter = (e) => {
    const value = e.target.value;

    if (e.target.value !== '') {
      const filteredItems = fishes.filter((item) => {
        return item.name.nameUSen.toLowerCase().includes(value.toLowerCase());
      });

      setFishesData(filteredItems)
    } else {
      setFishesData(fishes.slice(0, 10))
    }

    setFilterValue(value);
  }

  return (
    <div className={classes.wrapper}>
      <SearchField name="fishes" handleFilter={handleFilter} filterValue={filterValue} />
      <div className={classes.cardsWrapper}>
        {fishesData.map((item) => (
          <FishCard key={item.id} data={item} />
        ))}
      </div>
      {filterValue === '' && fishes.length !== 0 && fishesData.length !== fishes.length && (
        <button className={classes.button} onClick={appendItems}>Show More</button>
      )}
    </div>
  );
};

export default Fishes;
