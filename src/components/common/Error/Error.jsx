import React from 'react';
import SadImage from "../../../assets/images/sad.png";
import classes from "./Error.module.scss";
import {useHistory} from "react-router-dom";
import ButtonBack from "../ButtonBack/ButtonBack";

const Error = () => {
  const history = useHistory();

  return (
    <div className={classes.error}>
      <ButtonBack handleClick={history.goBack} />
      <h2>Something Went Wrong:(</h2>
      <img className={classes.errorImage} src={SadImage} alt=""/>
    </div>
  );
};

export default Error;
