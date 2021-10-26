import React from 'react';
import classes from "./SearchField.module.scss";

const SearchField = ({name, inputName, handleFilter, filterValue}) => {
  return (
    <label className={classes.searchField}>
      <span>Search {name}</span>
      <input name={inputName} type="search" onChange={handleFilter} value={filterValue} className={classes.searchInput} />
    </label>
  );
};

export default SearchField;
