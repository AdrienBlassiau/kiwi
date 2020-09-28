import React from 'react';

import styled from 'styled-components';
import SubtitlesLine from '../SubtitlesLine';

import { FixedSizeList as List } from 'react-window';

const SubtitlesList = (props) =>{

  const scrollRef = props.scrollRef;
  const refToCurrent=props.refToCurrent;
  const subs = props.subs;
  const shiftStatus = props.shiftStatus;
  const setShift=props.setShift;
  const shift=props.shift;
  const setLastCurrentLine=props.setLastCurrentLine;
  const setCurrentLine=props.setCurrentLine;
  const currentTime=props.currentTime;
  const lastCurrentLine=props.lastCurrentLine;
  
  let preparedComponent =
    <SubtitlesContainerStyle ref={scrollRef}>
      {subs.map((data,key) =>
        <SubtitlesLine
          key={key}
          shiftStatus={shiftStatus}
          setShift={setShift}
          shift={shift}
          setLastCurrentLine={setLastCurrentLine}
          refToCurrent={refToCurrent}
          setCurrentLine={() => setCurrentLine(data)}
          currentTime={currentTime}
          lastCurrentLine={lastCurrentLine}
          line={data}/>)}
    </SubtitlesContainerStyle>;

  return (preparedComponent)
};

const SubtitlesContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: scroll;
  overflow-x: scroll;
  overflow-x: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 50px;
  margin-top: 85px;
  scroll-behavior: smooth;
`;

export default SubtitlesList;
