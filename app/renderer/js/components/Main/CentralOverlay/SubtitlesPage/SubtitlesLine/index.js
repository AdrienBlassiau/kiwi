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
  const setLastCurrentLine = props.setLastCurrentLine;
  const refToCurrent = props.refToCurrent;
  const setCurrentLine = props.setCurrentLine;
  const currentTime = props.currentTime;

  const lastCurrentLine = props.lastCurrentLine;
  const lastLineNumber = lastCurrentLine ? lastCurrentLine.identifier : "-1";

  const line = props.line;
  const lineNumber = line.identifier;
  const text = line.text;
  const start = line.start;
  const end = line.end;

  const handleShifting = () => {
    if(shiftStatus){
      setShift(start - currentTime);
    }
  }

  useEffect(() => {
    let current = timeWithShift(start,shift) <= currentTime && currentTime <= timeWithShift(end,shift);
    setCurrent(current);
    if(current){
      setLastCurrentLine(line);
      setCurrentLine();
    }
  }, [shift]);

  useEffect(() => {
    let current = timeWithShift(start,shift) <= currentTime && currentTime <= timeWithShift(end,shift);
    setCurrent(current);
    if(current){
      setLastCurrentLine(line);
      setCurrentLine();
    }
  }, [currentTime]);

  let preparedComponent =
    <SubtitleLineStyle
      onClick={handleShifting}
      ref={current ? refToCurrent : null}>
      <SubtitlesLineTextBeforeStyle lastCurrentLine={lineNumber===lastLineNumber}>
        <DurationWithShift seconds={start} showMs={true} shift={shift}/>
      </SubtitlesLineTextBeforeStyle>
      <SubtitlesLineTextStyle
        lastCurrentLine={lineNumber===lastLineNumber}>
        {lineNumber===lastLineNumber ?
          generateColoredString(timeWithShift(start,shift),currentTime,timeWithShift(end,shift),text,textPrimaryColor,textIntermediateColor) :
        text}
      </SubtitlesLineTextStyle>
      <SubtitlesLineTextAfterStyle lastCurrentLine={lineNumber===lastLineNumber}>
        <DurationWithShift seconds={end} showMs={true} shift={shift}/>
      </SubtitlesLineTextAfterStyle>
    </SubtitleLineStyle>;

  return (preparedComponent)
};

const SubtitlesLineTextBeforeStyle = styled.div`
  font-size: 12px;
  color: ${props => props.lastCurrentLine ? "var(--text-primary)" : "var(--text-intermediate)"};
  font-weight: ${props => props.lastCurrentLine ? "bold" : "normal"};
`;

const SubtitlesLineTextAfterStyle = styled.div`
  font-size: 12px;
  color: ${props => props.lastCurrentLine ? "var(--text-primary)" : "var(--text-intermediate)"};
  font-weight: ${props => props.lastCurrentLine ? "bold" : "normal"};
`;

const SubtitlesLineTextStyle = styled.div`
  font-size: ${props => props.lastCurrentLine ? "44" : "24"}px;
  color: ${props => props.lastCurrentLine ? "var(--text-primary)" : "var(--text-intermediate)"};
  font-weight: ${props => props.lastCurrentLine ? "bold" : "normal"};
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
