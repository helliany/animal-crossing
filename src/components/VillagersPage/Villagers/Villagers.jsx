import React, {useCallback, useEffect, useState} from 'react';
import {getVillagers} from "../../../redux/villagers-reducer";
import {useDispatch, useSelector} from "react-redux";
import VillagersCard from "../VillagersCard/VillagersCard";
import classes from "./Villagers.module.scss";
import SearchField from "../../common/SearchField/SearchField";
import Loader from "../../common/Loader/Loader";
import Error from "../../common/Error/Error";
import SearchImage from "../../../assets/images/search.png";

const Villagers = () => {
  const dispatch = useDispatch();
  const villagers = useSelector(state => state.villagers.villagers);
  const [villagersData, setVillagersData] = useState(villagers);
  const [filterValueName, setFilterValueName] = useState('');
  const [filterValueSpecies, setFilterValueSpecies] = useState(0);
  const [filterOptions, setFilterOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getVillagers());
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
    setVillagersData(villagers.slice(0, 10));
    setFilterOptions(() => Array.from(new Set(villagers.map((item) => item.species))));
  }, [villagers]);


  const appendItems = useCallback(() => {
    setVillagersData([
      ...villagersData,
      ...villagers.slice(villagersData.length, villagersData.length + 10)
    ]);
  }, [villagers, villagersData, setVillagersData]);

  const handleFilter = (e) => {
    const value = e.target.value;

    const filterItems = (filterCb) => {
      if (e.target.value !== '') {
        const filteredItems = villagers.filter((item) => filterCb(item));
        setVillagersData(filteredItems)
      } else {
        setVillagersData(villagers.slice(0, 10))
      }
    }

    if (e.target.name === 'villagersName') {
      filterItems((item) => {
        return item.name.nameUSen.toLowerCase().includes(value.toLowerCase());
      })
      setFilterValueName(value);
      setFilterValueSpecies(0);
    }

    if (e.target.name === 'villagersSpecies') {
      filterItems((item) => {
        return item.species.toLowerCase().includes(value.toLowerCase());
      })
      setFilterValueSpecies(value);
      setFilterValueName('');
    }
  }

  return (
    <div className={classes.wrapper}>
      {isError && !isLoading && <Error />}
      {isLoading && !isError && <Loader />}
      {!isLoading && !isError && (
        <>
          <div className={classes.fieldsWrapper}>
            <SearchField name="Villagers" inputName="villagersName" handleFilter={handleFilter} filterValue={filterValueName} />
            <label className={classes.searchField}>
              <span>Search Species</span>
              <select className={classes.searchInput} name="villagersSpecies" onChange={handleFilter} value={filterValueSpecies}>
                <option value="0" disabled>-- Select Species --</option>
                {filterOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
          <div className={classes.cardsWrapper}>
            {villagersData.map((item) => (
              <VillagersCard key={item.id} data={item} />
            ))}
          </div>
          {filterValueName === '' && filterValueSpecies === 0 && villagers.length !== 0 && villagersData.length !== villagers.length && (
            <div className={classes.buttonWrapper}>
              <button className={classes.button} onClick={appendItems}>Show More</button>
            </div>
          )}
          {(filterValueName !== '' || filterValueSpecies !== 0) && villagersData.length === 0 && (
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

export default Villagers;
