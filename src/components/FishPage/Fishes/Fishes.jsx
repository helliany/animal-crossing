import React, {useCallback, useEffect, useState} from 'react';
import classes from "./Fishes.module.scss";
import FishCard from "../FishCard/FishCard";
import {useDispatch, useSelector} from "react-redux";
import {getFishes} from "../../../redux/fishReducer";
import SearchField from "../../common/SearchField/SearchField";
import Loader from "../../common/Loader/Loader";
import Error from "../../common/Error/Error";
import SearchImage from "../../../assets/images/search.png";

const Fishes = () => {
  const dispatch = useDispatch();
  const fishes = useSelector(state => state.fishes.fishes);
  const [fishesData, setFishesData] = useState(fishes);
  const [filterValue, setFilterValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getFishes());
        setIsLoading(false);
        setIsError(false);
      } catch(err) {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setFishesData(fishes.slice(0, 10));
  }, [fishes]);

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
      {isError && !isLoading && <Error />}
      {isLoading && !isError && <Loader />}
      {!isLoading && !isError && (
        <>
          <SearchField name="fishes" inputName="fishesName" handleFilter={handleFilter} filterValue={filterValue} />
          <div className={classes.cardsWrapper}>
            {fishesData.map((item) => (
              <FishCard key={item.id} data={item} />
            ))}
          </div>
          {filterValue === '' && fishes.length !== 0 && fishesData.length !== fishes.length && (
            <div className={classes.buttonWrapper}>
              <button className={classes.button} onClick={appendItems}>Show More</button>
            </div>
          )}
          {filterValue !== '' && fishesData.length === 0 && (
            <div className={classes.searchNotFound}>
              <h2>Nothing Found:(</h2>
              <img src={SearchImage} alt=""/>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Fishes;
