import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { textPrimaryColor } from '../../../../../utils/color';
import Navbar from '../../../../Navbar';
import IconSliders from '../../../../Icon/IconSliders';
const ReactDOM = require('react-dom');

const SpeedSection = () =>{
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [mouseOver, setMouseOver] = useState(0);
  const [move, setMove] = useState(false);
  const ref = useRef(null);
  let maxSpeed = 2;

  const onClick = () => {
    setCurrentSpeed(1);
  }

  const setCurrent = (current) => {
    setCurrentSpeed(current)
  }

  const round5 = (x) => {
    return Math.ceil(x/5)*5;
  }


  useEffect(() => {
    const domNode = ReactDOM.findDOMNode(ref.current);
    let mainBarY = domNode.getBoundingClientRect().top;
    if (mainBarY-move.pageY > 20){
      setMouseOver(false);
    }
  }, [move]);

  const handleMove = (e) => {
    setMove(e);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  let preparedComponent =
    <SpeedSectionContainerStyle
      onMouseEnter={(e) => {e.stopPropagation(); setMouseOver(true)}}
      onMouseLeave={(e) => {e.stopPropagation(); setMouseOver(false)}}
      mouseOver={mouseOver}
      ref={ref}>
      {mouseOver ?
        <SpeedSliderStyle>
          <SpeedSliderRelativeStyle>
            <Navbar
              additionalBars={[]}
              color={textPrimaryColor}
              barHeight={4}
              barWidth={100}
              max={maxSpeed}
              setCurrent={setCurrent}
              current={currentSpeed}
              formatter={ (s) =>
                <SpeedTextContainerStyle>
                  speed: {round5(s*20)/20}
                </SpeedTextContainerStyle>}/>
          </SpeedSliderRelativeStyle>
        </SpeedSliderStyle>: null}
      <SpeedSectionStyle onClick={onClick}>
        <IconSliders color={textPrimaryColor}/>
      </SpeedSectionStyle>
    </SpeedSectionContainerStyle>;

  return (preparedComponent)
};

const SpeedTextContainerStyle = styled.div`
  text-align: center;
  white-space: nowrap;
`;

const SpeedSliderRelativeStyle = styled.div`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    width: 0;
    height: 0;
    border-top: solid 10px var(--background-primary);
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
  }
`;


const SpeedSliderStyle = styled.div`
  position: absolute;
  display: flex;
  padding: 0 20px;
  bottom: 70px;
  background-color: var(--background-primary);
  box-shadow: var(--top-shadow);
  border-radius: 4px;
  left: 50%;
  transform: translate(-50%);
`;

const SpeedSectionContainerStyle = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 20px 0;
  width: 30px;
  height: 30px;
`;

const SpeedSectionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  cursor: pointer;
`;

export default SpeedSection;
