import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const PercentageCircle = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const percentage = props.percentage * 10;
  const width = props.width;
  const height = props.height;
  const border = props.border;
  const fontSize1 = props.fontSize1;
  const fontSize2 = props.fontSize2;

  const color =
    percentage >= 40
      ? percentage >= 70
        ? 'var(--good-color)'
        : 'var(--medium-color)'
      : 'var(--bad-color)';
  const color_t =
    percentage >= 40
      ? percentage >= 70
        ? 'var(--good-t-color)'
        : 'var(--medium-t-color)'
      : 'var(--bad-t-color)';
  const color_b = 'var(--dark-blue-color)';

  const circleMake = (percentage) => {
    const degree = (percentage * 360) / 100;

    if (percentage <= 25) {
      return {
        '--v': degree - 90 + 'deg',
        '--s': 1,
      };
    } else if (percentage <= 50) {
      return {
        '--v': degree - 90 + 'deg',
        '--s': 1,
      };
    } else if (percentage <= 75) {
      // console.log( 'IXI' )
      return {
        '--v': degree - 270 + 'deg',
        '--s': 0,
      };
    } else {
      return {
        '--v': degree - 270 + 'deg',
        '--s': 0,
      };
    }
  };

  const makeBoxTop = (width, height, color_b) => {
    const newWidth = width + 20;
    const newHeight = height + 20;
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: newWidth + 'px',
      height: newHeight + 'px',
      backgroundColor: color_b,
      borderRadius: '50%',
    };
  };

  const makeBox = (width, height, color, color_b, color_t, border) => {
    return {
      width: width + 'px',
      height: height + 'px',
      display: 'inline-block',
      borderRadius: '50%',
      border: border + 'px solid transparent',
      background:
        'linear-gradient(' +
        color_b +
        ',' +
        color_b +
        ') padding-box, linear-gradient(var(--v), ' +
        color_t +
        ' 50%,transparent 0) center/calc(var(--s)*100%) border-box, linear-gradient(var(--v), ' +
        color +
        ' 50%,transparent 0) center/calc(100% - var(--s)*100%) border-box, linear-gradient(to right, ' +
        color_t +
        ' 50%,' +
        color +
        ' 0) border-box',
    };
  };

  const makeCustomPerc = (fontSize) => {
    return {
      color: 'white',
      fontWeight: 'bold',
      fontSize: fontSize + 'px',
    };
  };

  const makeCustomSup = (fontSize) => {
    return {
      marginBottom: '10px',
      fontSize: fontSize + 'px',
      color: 'white',
      fontWeight: 'bold',
    };
  };

  const style1 = makeBoxTop(width, height, color_b);
  const style2 = circleMake(percentage);
  const style3 = makeBox(width, height, color, color_b, color_t, border);
  const style4 = makeCustomPerc(fontSize1);
  const style5 = makeCustomSup(fontSize2);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div style={style1}>
      <div style={{ ...style2, ...style3 }}>
        <PercentageBox>
          <span style={style4}>{percentage}</span>
          <sup style={style5}>%</sup>
        </PercentageBox>
      </div>
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const PercentageBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default PercentageCircle;
