import React from 'react';
import classes from './PopUp.module.css';
import Result from '../Result/Result';

const PopUp = (props) => {
  return (
    <div className={classes.popUp}>
      <div onClick={props.closeWindow} className={classes.closePopUp}>
        <img src="./img/Svg/Close-icon.svg" alt="Close" />
      </div>
      <div className={classes.typeContainer}>
        <h1 className={classes.popUpTitle}>Your file is</h1>
        <p className={classes.postscript}>: ( {props.fileExtension} )</p>
      </div>
      <Result fileName={props.fileName} />
    </div>
  );
};

export default PopUp;

