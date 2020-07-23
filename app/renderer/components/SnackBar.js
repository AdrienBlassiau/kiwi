import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

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
    snackQueue.splice(index, 1);
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
    <SnackBarStyle isActive={isActive}>
      <SnackBarText>{item.text}</SnackBarText>
      <SnackBarClose onClick={() => handleRemoveSnackBar(index)}>
        <CloseIcon />
      </SnackBarClose>
    </SnackBarStyle>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const SnackBarStyle = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-color-4);
  width: 500px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: white;
  padding: 5px;
  opacity: 0.7;

  ${(props) =>
    props.isActive &&
    css`
      display: flex;
      -webkit-animation: fadein 0.5s, fadeout 0.5s 4.5s;
      animation: fadein 0.5s, fadeout 0.5s 4.5s;
    `};

  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 0.7;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 0.7;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 0.7;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 0.7;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;

const SnackBarText = styled.div`
  margin-left: 10px;
`;

const SnackBarClose = styled.div`
  margin-right: 10px;
  line-height: 0;
  cursor: pointer;
`;

export default SnackBar;
