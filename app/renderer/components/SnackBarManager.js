import React, { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import SnackBar from './SnackBar';

const SnackBarManager = (props) => {

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  const { snackQueue } = props.getters.snack;
  const { setSnackQueue } = props.setters.snack;

  const snack = { snackQueue,setSnackQueue }

  console.log("snackQueue",snackQueue)
  const snackBarList = snackQueue.map((item,key) => {
    return (<SnackBar key={key} item={item} index={key} snack={snack}/>)
  })
  return (
    <div className="snack-bar-container">
        {snackBarList}
    </div>
  );
};

export default SnackBarManager;
