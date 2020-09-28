import React, { useEffect, useState } from 'react';
const ReactDOM = require('react-dom');

import styled from 'styled-components';
import Duration from '../../../../../utils/Duration';
import { DurationWithShift, timeWithShift } from '../../../../../utils/DurationWithShift';
import { generateColoredString } from '../../../../../utils/colorText';
import { textIntermediateColor, textPrimaryColor } from '../../../../../utils/color';

const SubtitlesLine = (props) =>{
  const [current, setCurrent] = useState(0);
  const shiftStatus = props.shiftStatus;
  const setShift = props.setShift;
  const shift = props.shift;
  const refToCurrent = props.refToCurrent;
  const currentLine = props.currentLine;
  const setCurrentLine = props.setCurrentLine;
  const currentTime = props.currentTime;
  const setCurrentTime = props.setCurrentTime;

  const nextLine = props.nextLine;
  const line = props.line;
  const lineNumber = line.identifier;
  const text = line.text;
  const start = line.start;
  const end = line.end;

  const handleShifting = () => {
    if(shiftStatus){
      setShift(start - currentTime);
    }
    else{
      setCurrentTime(timeWithShift(start,shift));
    }
  }

  const isRealCurrent = () => {
    return timeWithShift(start,shift) <= currentTime && currentTime <= timeWithShift(end,shift);
  }

  const isTheoreticalCurrent = () => {
    return (lineNumber==="1" && currentTime < timeWithShift(start,shift)) ||
      (currentTime > timeWithShift(end,shift) && currentTime < timeWithShift(nextLine.start,shift)) ||
      (currentTime > timeWithShift(end,shift) && !nextLine);
  }

  const manageCurrentLine = () => {
    let realCurrent = isRealCurrent();
    let TheoreticalCurrent = isTheoreticalCurrent();

    let current = realCurrent || TheoreticalCurrent;
    setCurrent(current);
    if(current){
      setCurrentLine();
    }
  }

  useEffect(() => {
    manageCurrentLine();
  }, [shift]);

  useEffect(() => {
    manageCurrentLine();
  }, [currentTime]);

  let preparedComponent =
    <SubtitleLineStyle
      onClick={handleShifting}
      ref={current ? refToCurrent : null}>
      <SubtitlesLineTextBeforeStyle current={current}>
        <DurationWithShift seconds={start} showMs={true} shift={shift}/>
      </SubtitlesLineTextBeforeStyle>
      <SubtitlesLineTextStyle
        current={current}>
        {current ?
          generateColoredString(timeWithShift(start,shift),currentTime,timeWithShift(end,shift),text,textPrimaryColor,textIntermediateColor) :
        text}
      </SubtitlesLineTextStyle>
      <SubtitlesLineTextAfterStyle current={current}>
        <DurationWithShift seconds={end} showMs={true} shift={shift}/>
      </SubtitlesLineTextAfterStyle>
    </SubtitleLineStyle>;

  return (preparedComponent)
};

const SubtitlesLineTextBeforeStyle = styled.div`
  font-size: 12px;
  color: ${props => props.current ? "var(--text-primary)" : "var(--text-intermediate)"};
  font-weight: ${props => props.current ? "bold" : "normal"};
`;

const SubtitlesLineTextAfterStyle = styled.div`
  font-size: 12px;
  color: ${props => props.current ? "var(--text-primary)" : "var(--text-intermediate)"};
  font-weight: ${props => props.current ? "bold" : "normal"};
`;

const SubtitlesLineTextStyle = styled.div`
  font-size: ${props => props.current ? "44" : "24"}px;
  color: ${props => props.current ? "var(--text-primary)" : "var(--text-intermediate)"};
  font-weight: ${props => props.current ? "bold" : "normal"};
  margin: 30px 10px;
  text-align: center;
  max-width: 1000px;
`;

const SubtitleLineStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
  &:hover{
    background-color: var(--background-contrast);
  }
`;

export default SubtitlesLine;
