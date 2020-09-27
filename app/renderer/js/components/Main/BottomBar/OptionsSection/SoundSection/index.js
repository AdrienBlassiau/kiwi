import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import IconSound from '../../../../Icon/IconSound';
import { textPrimaryColor } from '../../../../../utils/color';
import Navbar from '../../../../Navbar';
const ReactDOM = require('react-dom');

const SoundSection = () =>{
  const [level, setLevel] = useState(0);
  const [previousSound, setPreviousSound] = useState(0);
  const [currentSound, setCurrentSound] = useState(0);
  const [mouseOver, setMouseOver] = useState(0);
  const [move, setMove] = useState(false);
  const ref = useRef(null);
  let maxSound = 1;

  const computeLevel = (currentSound) => {
    if(currentSound < 0.25){
      return 1;
    }
    else if(currentSound >= 0.25 && currentSound < 0.5){
      return 2;
    }
    else{
      return 3;
    }
  }

  const onClick = () => {
    if (level !== 0){
      setPreviousSound(currentSound);
      setCurrentSound(0);
      setLevel(0);
    }
    else{
      setCurrentSound(previousSound)
      setLevel(computeLevel(previousSound));
    }
  }

  const setCurrent = (current) => {
    setCurrentSound(current)
    setLevel(computeLevel(current));
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
    <SoundSectionContainerStyle
      onMouseEnter={(e) => {e.stopPropagation(); setMouseOver(true)}}
      onMouseLeave={(e) => {e.stopPropagation(); setMouseOver(false)}}
      mouseOver={mouseOver}
      ref={ref}>
     {mouseOver ?
      <SoundSliderStyle>
        <SoundSliderRelativeStyle>
          <Navbar
            additionalBars={[]}
            color={textPrimaryColor}
            barHeight={4}
            barWidth={100}
            max={maxSound}
            setCurrent={setCurrent}
            current={currentSound}
            formatter={ (s) =>
              <SoundTextContainerStyle>
                sound: {parseFloat(s).toFixed(1)}
              </SoundTextContainerStyle>}/>
        </SoundSliderRelativeStyle>
      </SoundSliderStyle>: null}
      <SoundSectionStyle onClick={onClick}>
        <IconSound color={textPrimaryColor} level={level}/>
      </SoundSectionStyle>
    </SoundSectionContainerStyle>;

  return (preparedComponent)
};

const SoundTextContainerStyle = styled.div`
  text-align: center;
  white-space: nowrap;
`;

const SoundSliderRelativeStyle = styled.div`
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


const SoundSliderStyle = styled.div`
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

const SoundSectionContainerStyle = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 20px 0;
  width: 30px;
  height: 30px;
`;

const SoundSectionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  cursor: pointer;
`;

export default SoundSection;
