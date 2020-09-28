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
  const currentTime=props.currentTime;
  const setCurrentTime=props.setCurrentTime;
  const currentLine=props.currentLine;
  const setCurrentLine=props.setCurrentLine;

  const Row = ({ index, style, data }) => {
    const line = data[index];
    return (
      <div style={style} key={index}>
        <SubtitlesLine
          key={index}
          shiftStatus={shiftStatus}
          setShift={setShift}
          shift={shift}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          currentLine={currentLine}
          setCurrentLine={() => setCurrentLine(line)}
          line={line}/>
      </div>
    );
  };

  let preparedComponent =
    <SubtitlesContainerStyle ref={scrollRef}>
      {subs.map((data,key) =>
        <SubtitlesLine
          key={key}
          shiftStatus={shiftStatus}
          setShift={setShift}
          shift={shift}
          refToCurrent={refToCurrent}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          currentLine={currentLine}
          setCurrentLine={() => setCurrentLine(data)}
          line={data}
          nextLine={key === subs.length - 1 ? null : subs[key+1]}/>)}
    </SubtitlesContainerStyle>;

  let preparedComponentWithReactWindow =
    <div>
      <SubtitlesContainerStyle>
        <List
          height={1000}
          itemCount={subs.length}
          itemSize={150}
          width={1000}
          itemData={subs}
      >
        {Row}
      </List>
      </SubtitlesContainerStyle>
      <div ref={refToCurrent} />
      <div ref={scrollRef} />
    </div>;

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
