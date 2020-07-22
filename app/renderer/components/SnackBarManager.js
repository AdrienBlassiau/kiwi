import React, { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import SnackBar from './SnackBar';

const SnackBarManager = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  const snackQueue = props.snackQueue;
  const setSnackQueue = props.setSnackQueue;

  const snack = { snackQueue, setSnackQueue };

  const snackBarList = snackQueue.map((item, key) => {
    return <SnackBar key={key} item={item} index={key} snack={snack} />;
  });
  return <div className="snack-bar-container">{snackBarList}</div>;
};

export default SnackBarManager;
