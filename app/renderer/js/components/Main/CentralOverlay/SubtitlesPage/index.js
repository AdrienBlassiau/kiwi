import React, { useEffect, useRef, useState } from 'react';
const ReactDOM = require('react-dom');

import styled from 'styled-components';
import OverlayTitle from '../OverlayTitle/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeOverlay } from '../../../../store/overlayPage';

import SubtitlesShifter from './SubtitlesShifter';
import { DurationWithShift, timeWithShift } from '../../../../utils/DurationWithShift';
import SubtitlesList from './SubtitlesList';
import { setCurrentTime, setCurrentLine, setShift, incrementTime } from '../../../../store/streamingPage';

const SubtitlesPage = () =>{
  const dispatch = useDispatch();

  const currentTime = useSelector(state => state.streaming.currentTime);
  const subs = useSelector(state => state.streaming.subs);
  const shift = useSelector(state => state.streaming.shift);
  const currentLine = useSelector(state => state.streaming.currentLine);

  const setCurrent = (currentTime) => {
    dispatch(setCurrentTime({currentTime:currentTime}));
  }

  const incrementTimeDispatched = () => {
    dispatch(incrementTime());
  }

  const setShiftDispatched = (shift) => {
    dispatch(setShift({shift:shift}));
  }

  const setCurrentLineDispatched = (currentLine) => {
    dispatch(setCurrentLine({currentLine:currentLine}));
  }

  const [subsToWrite,setSubsToWrite] = useState("");
  const [shiftStatus, setShiftStatus] = useState(true);

  const [isScrolling, setIsScrolling] = useState(true);
  const [wheel, setWheel] = useState(null);
  const [clientHeight, setClientHeight] = useState(0);
  const refToCurrent = useRef(null);
  const scrollRef = useRef(null);

  const backFun = () => {
    dispatch(changeOverlay({overlayType:"",id:0}));
  }

  useEffect(() => {
    const domNode = ReactDOM.findDOMNode(scrollRef.current);
    setClientHeight(domNode.clientHeight);
  });

  useEffect(() => {
    if(currentLine){
      const start = currentLine.start;
      const end = currentLine.end;
      const text = currentLine.text;
      if (timeWithShift(start,shift) <= currentTime && currentTime <= timeWithShift(end,shift)){
        if (text !== subsToWrite){
          setSubsToWrite(text);
          console.log(text)
        }
      }

    }
  }, [currentTime]);

  useEffect(() => {
    if (refToCurrent && refToCurrent.current && isScrolling){
      let height = ReactDOM.findDOMNode(refToCurrent.current).getBoundingClientRect().height;
      scrollRef.current.scrollTo(0, refToCurrent.current.offsetTop-clientHeight/2+height/2)
    }
  }, [currentLine]);

  /*useEffect(() => {
    const interval = setInterval(() => {
      incrementTimeDispatched();
    }, 200);
    return () => clearInterval(interval);
  }, []);*/

  useEffect(() => {
    console.log("not scrolling !")
    setIsScrolling(false);
  }, [wheel]);

  const handleWheel = (e) => {
    setWheel(e);
  }

  useEffect(() => {
    scrollRef.current.addEventListener('wheel', handleWheel);
    return () => scrollRef.current.removeEventListener("wheel", handleWheel);
  }, []);

  const resetScroll = () => {
    setIsScrolling(true);
    if (refToCurrent && refToCurrent.current){
      let height = ReactDOM.findDOMNode(refToCurrent.current).getBoundingClientRect().height;
      scrollRef.current.scrollTo(0, refToCurrent.current.offsetTop-clientHeight/2+height/2)
    }
  }

  const subtitlesShifter = <SubtitlesShifter
    shiftStatus={shiftStatus}
    setShiftStatus={setShiftStatus}
    shift={shift}
    currentTime={currentTime}
    setShift={setShiftDispatched}
  />;

  const DynamicSubtitlesTitle =
    <SubtitleLineStyle
      isScrolling={isScrolling}
      onClick={resetScroll}>
      {!isScrolling ?<SubtitlesLineTextBeforeStyle>
        <DurationWithShift seconds={currentLine.start} showMs={true} shift={shift}/>
      </SubtitlesLineTextBeforeStyle>:null}
      <SubtitlesLineTextStyle>
        {isScrolling ? "Subtitles" : currentLine.text}
      </SubtitlesLineTextStyle>
      {!isScrolling ?<SubtitlesLineTextAfterStyle>
        <DurationWithShift seconds={currentLine.end} showMs={true} shift={shift}/>
      </SubtitlesLineTextAfterStyle>:null}
    </SubtitleLineStyle>;


  let preparedComponent =
    <SubtitleWrapperStyle>
      <SubtitlesPageStyle>
        <OverlayTitle
          leftComponent={subtitlesShifter}
          title={DynamicSubtitlesTitle}
          backFun={backFun}/>
        <SubtitlesMainContainerStyle>
          <SubtitlesWrapperStyle>
            <SubtitlesList
              scrollRef={scrollRef}
              refToCurrent={refToCurrent}
              subs={subs}
              shiftStatus={shiftStatus}
              setShift={setShiftDispatched}
              shift={shift}
              currentTime={currentTime}
              setCurrentTime={setCurrent}
              currentLine={currentLine}
              setCurrentLine={setCurrentLineDispatched}/>
          </SubtitlesWrapperStyle>
        </SubtitlesMainContainerStyle>
      </SubtitlesPageStyle>
    </SubtitleWrapperStyle>;

  return (preparedComponent)
};

const SubtitlesLineTextBeforeStyle = styled.div`
  font-size: 12px;
`;

const SubtitlesLineTextAfterStyle = styled.div`
  font-size: 12px;
`;

const SubtitlesLineTextStyle = styled.div`
  text-align: center;
  margin: 0 5px;
  max-width: 1000px;
`;

const SubtitleLineStyle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.isScrolling ? "transparent" : "var(--background-contrast)"};
  }
`;

const SubtitlesMainContainerStyle = styled.div`
  bottom: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  left: 0;
  position: absolute;
  right: 0;
  top: 56px;
  align-items: center;
  justify-content: center;
`;

const SubtitleWrapperStyle = styled.div`
  height: 100%;
  position: relative;
`;

const SubtitlesWrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

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

const SubtitlesPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  box-shadow: 0 4px 20px 0 var(--scroller-shadow-color);
  background-color: var(--background-primary);
`;

export default SubtitlesPage;
