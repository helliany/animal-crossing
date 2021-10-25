import React, {useCallback, useEffect, useState} from 'react';
import classes from "../../VillagersPage/Villagers/Villagers.module.scss";
import BugCard from "../BugCard/BugCard";
import {useDispatch, useSelector} from "react-redux";
import {getBugs} from "../../../redux/bugs-reducer";
import SearchField from "../../common/SearchField/SearchField";

const Bugs = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.bugs.bugs);
  const [bugsData, setBugsData] = useState(bugs);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    dispatch(getBugs());
  }, [dispatch]);

  useEffect(() => {
    setBugsData(bugs.slice(0, 10));
  }, [bugs]);


  // функция "доклеивающая" элементы массива
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
      <SearchField name="bugs" handleFilter={handleFilter} filterValue={filterValue} />
      <div className={classes.cardsWrapper}>
        {bugsData.map((item) => (
          <BugCard key={item.id} data={item} />
        ))}
      </div>
      <button className={classes.button} onClick={appendItems}>Show More</button>
    </div>
  );
};

export default Bugs;
