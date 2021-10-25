import React from 'react';
import classes from "./SearchField.module.scss";

const SearchField = ({name, handleFilter, filterValue}) => {
  return (
    <label className={classes.searchField}>
      <span>Search {name}</span>
      <input type="search" onChange={handleFilter} value={filterValue} className={classes.searchInput} />
    </label>
  );
};

export default SearchField;
