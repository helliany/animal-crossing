import React, {useCallback, useEffect, useState} from 'react';
import classes from "./Bugs.module.scss";
import BugCard from "../BugCard/BugCard";
import {useDispatch, useSelector} from "react-redux";
import {getBugs} from "../../../redux/bugsReducer";
import SearchField from "../../common/SearchField/SearchField";
import Loader from "../../common/Loader/Loader";
import Error from "../../common/Error/Error";
import SearchImage from "../../../assets/images/search.png";

const Bugs = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.bugs.bugs);
  const [bugsData, setBugsData] = useState(bugs);
  const [filterValue, setFilterValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getBugs());
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
    setBugsData(bugs.slice(0, 10));
  }, [bugs]);


  const appendItems = useCallback(() => {
    setBugsData([
      ...bugsData,
      ...bugs.slice(bugsData.length, bugsData.length + 10)
    ]);
  }, [bugs, bugsData, setBugsData]);

  const handleFilter = (e) => {
    const value = e.target.value;

    if (e.target.value !== '') {
      const filteredItems = bugs.filter((item) => {
        return item.name.nameUSen.toLowerCase().includes(value.toLowerCase());
      });

      setBugsData(filteredItems)
    } else {
      setBugsData(bugs.slice(0, 10))
    }

    setFilterValue(value);
  }

  return (
    <div className={classes.wrapper}>
      {isError && !isLoading && <Error />}
      {isLoading && !isError && <Loader />}
      {!isLoading && !isError && (
        <>
          <SearchField name="bugs" inputName="bugsName" handleFilter={handleFilter} filterValue={filterValue} />
          <div className={classes.cardsWrapper}>
          {bugsData.map((item) => (
            <BugCard key={item.id} data={item} />
          ))}
          </div>
          {filterValue === '' && bugs.length !== 0 && bugsData.length !== bugs.length && (
            <div className={classes.buttonWrapper}>
              <button className={classes.button} onClick={appendItems}>Show More</button>
            </div>
          )}
          {filterValue !== '' && bugsData.length === 0 && (
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

export default Bugs;
