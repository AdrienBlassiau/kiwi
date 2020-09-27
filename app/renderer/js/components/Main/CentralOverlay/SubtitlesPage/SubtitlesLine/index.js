import React, { useEffect, useState } from 'react';
const ReactDOM = require('react-dom');

import styled from 'styled-components';
import Duration from '../../../../../utils/Duration';
import { generateColoredString } from '../../../../../utils/colorText';
import { textIntermediateColor, textPrimaryColor } from '../../../../../utils/color';

const SubtitlesLine = (props) =>{

  const currentTime = props.currentTime;
  const refToCurrent = props.refToCurrent;
  const text = props.text;
  const start = props.start;
  const end = props.end;
  const setCurrentLine = props.setCurrentLine;
  const [current, setCurrent] = useState(0);
  const lineNumber = props.lineNumber;
  const setLastCurrentLine = props.setLastCurrentLine;
  const lastCurrentLine = props.lastCurrentLine;

  useEffect(() => {
    let current = start <= currentTime && currentTime <= end;
    setCurrent(current);
    if(current){
      setLastCurrentLine(lineNumber);
      setCurrentLine();
    }
  }, [currentTime]);


  let preparedComponent =
    <SubtitleLineStyle ref={current ? refToCurrent : null}>
      <SubtitlesLineTextBeforeStyle lastCurrentLine={lineNumber===lastCurrentLine}>
        <Duration seconds={start} showMs={true} />
      </SubtitlesLineTextBeforeStyle>
      <SubtitlesLineTextStyle lastCurrentLine={lineNumber===lastCurrentLine}>
        {lineNumber===lastCurrentLine ? generateColoredString(start,currentTime,end,text,textPrimaryColor,textIntermediateColor) :
        text}
      </SubtitlesLineTextStyle>
      <SubtitlesLineTextAfterStyle lastCurrentLine={lineNumber===lastCurrentLine}>
        <Duration seconds={end} showMs={true} />
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
  margin: 30px 5px;
  text-align: center;
  max-width: 1000px;
`;

const SubtitleLineStyle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export default SubtitlesLine;
