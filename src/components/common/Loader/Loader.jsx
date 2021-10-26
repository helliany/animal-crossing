import React from 'react';
import classes from "./Loader.module.scss";
import {ReactComponent as LoaderIcon} from "../../../assets/images/loader.svg";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <LoaderIcon width={150} />
    </div>
  );
};

export default Loader;
