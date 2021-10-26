import React from 'react';
import classes from "./ButtonBack.module.scss";

const ButtonBack = ({handleClick}) => {
  return (
    <div className={classes.buttonBackWrapper}>
      <button className={classes.buttonBack} onClick={handleClick}>{`< Back`}</button>
    </div>
  );
};

export default ButtonBack;
