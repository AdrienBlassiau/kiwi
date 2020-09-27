import React, { useEffect, useRef, useState } from 'react';
const ReactDOM = require('react-dom');

import styled from 'styled-components';
import OverlayTitle from '../OverlayTitle/index.js';
import { useDispatch } from 'react-redux';
import { changeOverlay } from '../../../../store/overlayPage';
import { getVTTData } from '../../../../utils/captionsManager';

import SubtitlesLine from './SubtitlesLine';

const SubtitlesPage = () =>{
  const [currentTime, setCurrentTime] = useState(230.9);
  const [currentLine, setCurrentLine] = useState("");
  const [lastCurrentLine, setLastCurrentLine] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [wheel, setWheel] = useState(null);
  const [isScrolling, setIsScrolling] = useState(null);
  const ref = useRef(null);
  const scrollRef = useRef(null);

  const dispatch = useDispatch();
  const subs = getVTTData();

  const backFun = () => {
    dispatch(changeOverlay({overlayType:"",id:0}));
  }

  useEffect(() => {
    const domNode = ReactDOM.findDOMNode(scrollRef.current);
    setClientHeight(domNode.clientHeight);
  });

  useEffect(() => {
    if (ref && ref.current && isScrolling){
      let height = ReactDOM.findDOMNode(ref.current).getBoundingClientRect().height;
      setAutoScroll(false);
      scrollRef.current.scrollTo(0, ref.current.offsetTop-clientHeight/2+height/2)
      setAutoScroll(true);
    }
  }, [currentLine]);

  /*useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(currentTime=>currentTime+1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);*/

  useEffect(() => {
    setIsScrolling(false);
  }, [wheel]);

  const handleWheel = (e) => {
    setWheel(e);
  }

  useEffect(() => {
    scrollRef.current.addEventListener('wheel', handleWheel);
    return () => scrollRef.current.removeEventListener("wheel", handleWheel);
  }, []);


  let preparedComponent =
    <SubtitleWrapperStyle>
      <SubtitlesPageStyle>
        <OverlayTitle title={"Subtitles"} backFun={backFun}/>
        <SubtitlesMainContainerStyle>
          <SubtitlesWrapperStyle>
            <SubtitlesContainerStyle ref={scrollRef}>
              {subs.map((data,key) =>
                <SubtitlesLine
                  lineNumber={key}
                  lastCurrentLine={lastCurrentLine}
                  setLastCurrentLine={setLastCurrentLine}
                  refToCurrent={ref}
                  setCurrentLine={() => setCurrentLine(data)}
                  text={data.text}
                  start={data.start}
                  end={data.end}
                  currentTime={currentTime}
                  key={key}/>)}
            </SubtitlesContainerStyle>
          </SubtitlesWrapperStyle>
        </SubtitlesMainContainerStyle>
      </SubtitlesPageStyle>
    </SubtitleWrapperStyle>;

  return (preparedComponent)
};

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
  margin-top: 50px;
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
