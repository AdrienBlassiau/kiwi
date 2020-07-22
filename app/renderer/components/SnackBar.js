import React, { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';

const SnackBar = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  const item = props.item;
  const index = props.index;
  const snack = props.snack;
  const snackQueue = snack.snackQueue;
  const setSnackQueue = snack.setSnackQueue;

  const [isActive, setIsActive] = useState(false);

  const handleRemoveSnackBar = (index) => {
    console.log('BEFoRE SANCK:', snackQueue);
    snackQueue.splice(index, 1);
    console.log('AFTER SANCK:', snackQueue);
    const newSnackQueue = snackQueue.slice(0);
    setSnackQueue(newSnackQueue);
  };

  useEffect(() => {
    setIsActive(true);
  }, [index]);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 5000);
  }, [isActive]);

  return (
    <div className={'snack-bar ' + (isActive ? 'snack-bar-show' : '')}>
      <div className="snack-bar-text">{item.text}</div>
      <div className="snack-bar-close" onClick={() => handleRemoveSnackBar(index)}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default SnackBar;
