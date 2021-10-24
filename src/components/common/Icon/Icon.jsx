import React from 'react';
import classes from "./Icon.module.scss";

const Icon = (props) => {
  return (
    <div className={classes.icon}>
      {props.children}
    </div>
  );
};

export default Icon;
