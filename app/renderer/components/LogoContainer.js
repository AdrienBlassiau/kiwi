import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import ReactDOM from 'react-dom';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';
import ContentDisplay from './ContentDisplay';
import Modal from './Modal';
import SelectionBar from './SelectionBar';

const LogoContainer = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <NameContainer>
        <LogoContainerLetter>K</LogoContainerLetter>iwi
      </NameContainer>
      <LogoContainerStyle>
        <svg width="41.295mm" height="41.295mm" version="1.1" viewBox="0 0 41.295 41.295">
          <g transform="translate(-102.24 -134.9)">
            <g
              transform="matrix(.60255 -1.0437 1.0437 .60255 -102.61 98.632)"
              fill="var(--main-color-2)"
              strokeOpacity=".94059">
              <circle
                transform="rotate(60)"
                cx="187.12"
                cy="47.225"
                r="17.133"
                fill="var(--main-color-2)"
                style={{ 'paint-order': 'normal' }}
              />
              <g
                transform="matrix(2.7009 0 0 2.7009 -100.59 -274.79)"
                opacity=".185"
                stroke="#14181c"
                strokeOpacity="1">
                <g fill="var(--main-color-2)">
                  <rect
                    transform="rotate(210)"
                    x="-132.32"
                    y="-120"
                    width="1.1385"
                    height=".081784"
                    rx=".040892"
                    ry=".040892"
                    opacity="1"
                    strokeWidth=".2"
                  />
                  <ellipse
                    transform="matrix(-.86603 -.5 -.5 .86603 0 0)"
                    cx="-130.6"
                    cy="119.96"
                    rx=".21813"
                    ry=".07271"
                    opacity="1"
                    strokeWidth=".2"
                  />
                  <rect
                    transform="matrix(-.5 -.86603 -.86603 .5 0 0)"
                    x="-174.32"
                    y="36.467"
                    width="2.8866"
                    height=".2343"
                    ry=".11715"
                    opacity="1"
                    strokeWidth=".3"
                  />
                </g>
                <path
                  transform="rotate(-15)"
                  d="m8.0769 179.99a2.2628 2.2628 0 0 1 2.2628-2.2628"
                  fill="none"
                  opacity="1"
                  strokeLinecap="round"
                  strokeWidth=".4"
                />
                <g fill="var(--main-color-2)">
                  <rect
                    transform="scale(-1,1)"
                    x="-54.36"
                    y="171.09"
                    width="2.8866"
                    height=".2343"
                    ry=".11715"
                    opacity="1"
                    strokeWidth=".3"
                  />
                  <rect
                    transform="rotate(90)"
                    x="173.45"
                    y="-56.61"
                    width="1.1385"
                    height=".081784"
                    rx=".040892"
                    ry=".040892"
                    opacity="1"
                    strokeWidth=".2"
                  />
                  <ellipse
                    transform="matrix(0,1,1,0,0,0)"
                    cx="175.17"
                    cy="56.569"
                    rx=".21813"
                    ry=".07271"
                    opacity="1"
                    strokeWidth=".2"
                  />
                </g>
                <path
                  transform="rotate(225)"
                  d="m-163.31-81.046a2.2628 2.2628 0 0 1 2.2628-2.2628"
                  fill="none"
                  opacity="1"
                  strokeLinecap="round"
                  strokeWidth=".4"
                />
                <g fill="var(--main-color-2)">
                  <rect
                    transform="matrix(.5 .86603 .86603 -.5 0 0)"
                    x="178.75"
                    y="-36.698"
                    width="2.8866"
                    height=".2343"
                    ry=".11715"
                    opacity="1"
                    strokeWidth=".3"
                  />
                  <rect
                    transform="matrix(-.5 .86603 .86603 .5 0 0)"
                    x="122.18"
                    y="134.45"
                    width="2.8866"
                    height=".2343"
                    ry=".11715"
                    opacity="1"
                    strokeWidth=".3"
                  />
                  <rect
                    transform="rotate(-30)"
                    x="-34.338"
                    y="176.5"
                    width="1.1385"
                    height=".081784"
                    rx=".040892"
                    ry=".040892"
                    opacity="1"
                    strokeWidth=".2"
                  />
                  <ellipse
                    transform="matrix(.86603 -.5 -.5 -.86603 0 0)"
                    cx="-32.617"
                    cy="-176.54"
                    rx=".21813"
                    ry=".07271"
                    opacity="1"
                    strokeWidth=".2"
                  />
                </g>
                <path
                  transform="rotate(105)"
                  d="m148.45-98.952a2.2628 2.2628 0 0 1 2.2628-2.2628"
                  fill="none"
                  opacity="1"
                  strokeLinecap="round"
                  strokeWidth=".4"
                />
                <rect
                  transform="matrix(.5 -.86603 -.86603 -.5 0 0)"
                  x="-117.75"
                  y="-134.68"
                  width="2.8866"
                  height=".2343"
                  ry=".11715"
                  fill="var(--main-color-2)"
                  opacity="1"
                  strokeWidth=".3"
                />
                <rect
                  transform="scale(1,-1)"
                  x="58.788"
                  y="-171.32"
                  width="2.8866"
                  height=".2343"
                  ry=".11715"
                  fill="var(--main-color-2)"
                  opacity="1"
                  strokeWidth=".3"
                />
              </g>
              <g
                transform="matrix(2.7009 0 0 2.7009 -100.11 -276.7)"
                stroke="#14181c"
                strokeOpacity="1">
                <g fill="var(--main-color-2)">
                  <rect
                    transform="rotate(210)"
                    x="-132.32"
                    y="-120"
                    width="1.1385"
                    height=".081784"
                    rx=".040892"
                    ry=".040892"
                    strokeWidth=".2"
                  />
                  <ellipse
                    transform="matrix(-.86603 -.5 -.5 .86603 0 0)"
                    cx="-130.6"
                    cy="119.96"
                    rx=".21813"
                    ry=".07271"
                    strokeWidth=".2"
                  />
                  <rect
                    transform="matrix(-.5 -.86603 -.86603 .5 0 0)"
                    x="-174.32"
                    y="36.467"
                    width="2.8866"
                    height=".2343"
                    ry=".11715"
                    strokeWidth=".3"
                  />
                </g>
                <path
                  transform="rotate(-15)"
                  d="m8.0769 179.99a2.2628 2.2628 0 0 1 2.2628-2.2628"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth=".4"
                />
                <g fill="var(--main-color-2)">
                  <rect
                    transform="scale(-1,1)"
                    x="-54.36"
                    y="171.09"
                    width="2.8866"
                    height=".2343"
                    ry=".11715"
                    strokeWidth=".3"
                  />
                  <rect
                    transform="rotate(90)"
                    x="173.45"
                    y="-56.61"
                    width="1.1385"
                    height=".081784"
                    rx=".040892"
                    ry=".040892"
                    strokeWidth=".2"
                  />
                  <ellipse
                    transform="matrix(0,1,1,0,0,0)"
                    cx="175.17"
                    cy="56.569"
                    rx=".21813"
                    ry=".07271"
                    strokeWidth=".2"
                  />
                </g>
                <path
                  transform="rotate(225)"
                  d="m-163.31-81.046a2.2628 2.2628 0 0 1 2.2628-2.2628"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth=".4"
                />
                <g fill="var(--main-color-2)">
                  <rect
                    transform="matrix(.5 .86603 .86603 -.5 0 0)"
                    x="178.75"
                    y="-36.698"
                    width="2.8866"
                    height=".2343"
                    ry=".11715"
                    strokeWidth=".3"
                  />
                  <rect
                    transform="matrix(-.5 .86603 .86603 .5 0 0)"
                    x="122.18"
                    y="134.45"
                    width="2.8866"
                    height=".2343"
                    ry=".11715"
                    strokeWidth=".3"
                  />
                  <rect
                    transform="rotate(-30)"
                    x="-34.338"
                    y="176.5"
                    width="1.1385"
                    height=".081784"
                    rx=".040892"
                    ry=".040892"
                    strokeWidth=".2"
                  />
                  <ellipse
                    transform="matrix(.86603 -.5 -.5 -.86603 0 0)"
                    cx="-32.617"
                    cy="-176.54"
                    rx=".21813"
                    ry=".07271"
                    strokeWidth=".2"
                  />
                </g>
                <path
                  transform="rotate(105)"
                  d="m148.45-98.952a2.2628 2.2628 0 0 1 2.2628-2.2628"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth=".4"
                />
                <rect
                  transform="matrix(.5 -.86603 -.86603 -.5 0 0)"
                  x="-117.75"
                  y="-134.68"
                  width="2.8866"
                  height=".2343"
                  ry=".11715"
                  fill="var(--main-color-2)"
                  strokeWidth=".3"
                />
                <rect
                  transform="scale(1,-1)"
                  x="58.788"
                  y="-171.32"
                  width="2.8866"
                  height=".2343"
                  ry=".11715"
                  fill="var(--main-color-2)"
                  strokeWidth=".3"
                />
              </g>
            </g>
          </g>
        </svg>
      </LogoContainerStyle>
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const NameContainer = styled.div`
  position: absolute;
  top: 70px;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  font-weight: 100;
`;

const LogoContainerStyle = styled.div`
  position: absolute;
  top: 210px;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  font-weight: 100;
`;

const LogoContainerLetter = styled.span`
  font-weight: bold;
`;

export default LogoContainer;
