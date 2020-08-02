import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import ReactDOM from 'react-dom';

import TimePeeker from './TimePeeker';
import Duration from './Duration';

import { getVTTData, getFilePath, shiftVTT, rebuild, rebuildV2 } from '../subtitles/index.js';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

const Shifter = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const vttTab = props.vttTab;
  const setVttTab = props.setVttTab;
  const lang = props.lang;
  const currentTime = props.currentTime;
  const onCloseShift = props.onCloseShift;
  const setTimeOffSet = props.setTimeOffSet;
  const timeOffSet = props.timeOffSet;
  const [first, setFirst] = useState(0);
  const [offSet, setOffSet] = useState(200);
  const [followTheLine, setFollowTheLine] = useState(true);
  const [rebuilbVttTab, setRebuildVttTab] = useState(rebuildV2(vttTab[lang], first, offSet));
  const [topPosition, setTopPosition] = useState(0);
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState({
    isScrolling: false,
    scrollHeight: 0,
    scrollTop: 0,
    clientHeight: 0,
    clientX: 0,
    clientY: 0,
  });
  const [barPos, setBarPos] = useState(0);
  const [mouseup, setMouseup] = useState([]);
  const [mousemove, setMousemove] = useState([]);
  const [mousedown, setMousedown] = useState([]);
  const [click, setClick] = useState([]);

  const [newTime, setNewTime] = useState(0);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const component = ReactDOM.findDOMNode(scrollRef.current);
    var bodyRect = document.body.getBoundingClientRect(),
      elemRect = component.getBoundingClientRect();
    setTopPosition(elemRect.top - bodyRect.top);
  }, [ReactDOM.findDOMNode(scrollRef.current)]);

  const onTimePast = (e) => {
    e.stopPropagation();
    if (!followTheLine) {
      handleModifyTime(-offSet);
    }
  };

  const onTimeFuture = (e) => {
    e.stopPropagation();
    if (!followTheLine) {
      handleModifyTime(offSet);
    }
  };

  const handleSwitchOnOffEye = (e) => {
    e.stopPropagation();
    setFollowTheLine((followTheLine) => !followTheLine);
  };

  const handleModifyTime = (toAdd) => {
    if (!followTheLine) {
      let newFirst = first + toAdd;
      newFirst = Math.max(newFirst, 0);
      setRebuildVttTab(rebuildV2(vttTab[lang], newFirst, offSet));
      if (newFirst >= 0) {
        setFirst(newFirst);
      }
    }
  };

  const changeLineFocus = () => {
    if (followTheLine) {
      let newFirst = currentTime >= offSet / 2 ? currentTime - offSet / 2 : first;
      if (newFirst >= 0) {
        setRebuildVttTab(rebuildV2(vttTab[lang], newFirst, offSet));
        setFirst(newFirst);
      }
    }
  };

  useEffect(() => {
    changeLineFocus();
  }, [followTheLine]);

  useEffect(() => {
    changeLineFocus();
  }, [currentTime]);

  const handleShift = (wantedStartTime) => {
    let newTimeOffSet = newTime - currentTime;
    console.log('newTimeOffSet', newTimeOffSet);
    setTimeOffSet((os) => newTimeOffSet);
  };

  // useEffect(() => {
  //   const component = ReactDOM.findDOMNode(scrollRef.current);
  //   const maxHeight = component.clientHeight
  //   const cursorHeight = currentTime * 4
  //   // console.log(maxHeight,cursorHeight,maxHeight/2)
  //   const scrollNewHeight = cursorHeight > maxHeight/8 ? cursorHeight-maxHeight/8:0;
  //   component.scrollTop = scrollNewHeight
  // }, [barPos]);

  // useEffect(() => {
  //   setBarPos(currentTime * 4)
  // }, [currentTime]);

  useEffect(() => {
    // console.log('onMouseUp')
    setScroll({
      isScrolling: false,
      scrollHeight: 0,
      scrollTop: 0,
      clientHeight: 0,
      clientX: 0,
      clientY: 0,
    });
  }, [mouseup]);

  useEffect(() => {
    // console.log('onMouseMove:',scroll)
    const component = ReactDOM.findDOMNode(scrollRef.current);
    const { isScrolling, scrollHeight, scrollTop, clientHeight, clientX, clientY } = scroll;
    const eventClientY = mousemove[1];
    if (isScrolling && clientY && eventClientY) {
      // console.log('onMouseScroll:', clientY, eventClientY);
      const diff = clientY - eventClientY;
      if (diff % 5 === 0) {
        // console.log('diff', diff);
        handleModifyTime(diff > 0 ? 10 : -10);
        component.scrollTop = scrollTop - clientY + eventClientY;
      }
    }
  }, [mousemove]);

  useEffect(() => {
    console.log('onMouseDown');
    const component = ReactDOM.findDOMNode(scrollRef.current);
    const eventClientX = mousedown[0];
    const eventClientY = mousedown[1];

    console.log('topPosition:', topPosition);
    console.log(
      'eventClientX:',
      eventClientX,
      'eventClientY:',
      eventClientY,
      'scrollHeight:',
      component.scrollHeight,
      'scrollTop:',
      component.scrollTop,
      'clientHeight:',
      component.clientHeight,
      'clientHeight:',
      component.top,
    );

    setScroll({
      isScrolling: true,
      scrollHeight: component.scrollHeight,
      scrollTop: component.scrollTop,
      clientHeight: component.clientHeight,
      clientX: eventClientX,
      clientY: eventClientY,
    });
  }, [mousedown]);

  useEffect(() => {
    console.log('onClick');
    const [clientX, clientY] = click;
    console.log(clientY, topPosition, first + (clientY - topPosition) / 4);
    setNewTime(Math.ceil(first + (clientY - topPosition) / 4));
  }, [click]);

  useEffect(() => {
    const component = ReactDOM.findDOMNode(scrollRef.current);
    component.addEventListener('mouseup', (e) => setMouseup([e.clientX, e.clientY]));
    component.addEventListener('mousemove', (e) => setMousemove([e.clientX, e.clientY]));
    component.addEventListener('mousedown', (e) => setMousedown([e.clientX, e.clientY]));
    component.addEventListener('click', (e) => setClick([e.clientX, e.clientY]));
  }, []);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////  COMPONENTS  ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const list = rebuilbVttTab.map((item, key) => {
    return {
      data: item,
      key: key,
    };
  });

  const renderRow = (item) => {
    return (
      <ShifterContainerLine
        key={item.key}
        onClick={() => handleShift(item.data.start)}
        customHeight={Math.floor((item.data.end - item.data.start) * 40)}>
        <ShifterContainerDataTime>
          <Duration seconds={item.data.start} showMs={true} />
        </ShifterContainerDataTime>
        <ShifterContainerDataTextMaster odd={item.data.text === ''}>
          <ShifterContainerDataText>{item.data.text}</ShifterContainerDataText>
        </ShifterContainerDataTextMaster>
      </ShifterContainerLine>
    );
  };

  const renderMainLine = () => {
    // console.log(currentTime);
    // console.log('The red line:', currentTime, first, first + offSet);
    if (first <= currentTime && currentTime <= first + offSet) {
      // console.log('We render');
      return <ShifterRedLine top={(currentTime - first) * 4} />;
    }
    return null;
  };

  const renderSecondLine = () => {
    console.log('currentTime:', currentTime, ' vs newTime:', newTime);

    if (first <= newTime && newTime <= first + offSet) {
      // console.log('We render');
      return <ShifterBlueLine top={(newTime - first) * 4} />;
    }
    return null;
  };

  const renderEye = () => {
    return followTheLine ? (
      <VisibilityRoundedIcon onClick={handleSwitchOnOffEye} />
    ) : (
      <VisibilityOffRoundedIcon onClick={handleSwitchOnOffEye} />
    );
  };

  return (
    <ShifterMainContainer>
      <ShifterContainerBar>
        <ShifterContainerTimeSplitter>
          <CustomIconBars active={!followTheLine}>
            <KeyboardArrowUpRoundedIcon onClick={onTimePast} />
          </CustomIconBars>
          <CustomIconBars active={!followTheLine}>
            <KeyboardArrowDownRoundedIcon onClick={onTimeFuture} />
          </CustomIconBars>
          <CustomIconBars active={true}>{renderEye()}</CustomIconBars>
        </ShifterContainerTimeSplitter>
        <ShifterContainerTimeShower>
          <TimePeeker />
        </ShifterContainerTimeShower>
        <CustomIconBars active={true}>
          <CloseRoundedIcon onClick={onCloseShift} />
        </CustomIconBars>
      </ShifterContainerBar>
      <ShifterContainer ref={scrollRef}>
        {list.map(renderRow)}
        {/*<ShifterBlueLine top={scroll[1]}/>*/}
        {renderMainLine()}
        {renderSecondLine()}
        {/*<ShifterRedLine top={currentTime*4}/>*/}
      </ShifterContainer>
    </ShifterMainContainer>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const ShifterBlueLine = styled.div`
  position: absolute;
  height: 2px;
  width: 600px;
  background-color: var(--medium-color);
  top: ${(props) => props.top || '0'}px;
`;

const ShifterRedLine = styled.div`
  position: absolute;
  height: 2px;
  width: 600px;
  background-color: var(--good-color);
  top: ${(props) => props.top || '0'}px;
`;

const ShifterMainContainer = styled.div`
  position: absolute;
  top: 30px;
  z-index: 10;
  // height: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: min-content;
  color: var(--main-color-1);
  background-color: var(--main-color-1-1);
`;

const ShifterContainerBar = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: var(--main-color-1);
  color: var(--main-color-3);
`;

const CustomIconBars = styled.div`
  display: flex;
  opacity: ${({ active }) => (active && '0.5') || '0.2'};
  justify-content: flex-end;
  align-items: center;
  font-weight: bolder !important ;
  cursor: pointer;
  margin: 0 5px;
  line-height: 0;
  color: var(--main-color-3);
  &:hover {
    opacity: ${({ active }) => (active && '1') || '0.2'};
  }
`;

const ShifterContainerTimeFrame = styled.div`
  position: relative;
`;

const ShifterContainerTimeFrameLine = styled.div`
  position: absolute;
  color: var(--main-color-3);
  left: -50px;
  top: ${(props) => props.top || '20'}px;
`;

const ShifterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  // height: 100%;
  padding-left: 100px;
`;

const ShifterContainerLine = styled.div`
  display: flex;
  position: relative;
  cursor: ${({ special }) => (special && 'auto') || 'pointer'};
  min-height: ${(props) => props.customHeight || '20'}px;
`;

const ShifterContainerDataTime = styled.div`
  margin: 0 10px;
  position: absolute;
  width: 90px;
  overflow: hidden;
  color: var(--main-color-3);
  left: -100px;
  font-weight: ${({ special }) => (special && 'bold') || 'normal'};
`;

const ShifterContainerDataTextMaster = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px;
  width: 600px;
  background-color: ${({ odd }) => (odd && 'var(--main-color-1)') || 'var(--main-color-3)'};
  font-weight: ${({ special }) => (special && 'bold') || 'normal'};
`;

const ShifterContainerDataText = styled.div`
  margin: 0 10px;
`;

const ShifterContainerTimeSplitter = styled.div`
  display: flex;
`;
const ShifterContainerTimeShower = styled.div`
  color
  display: flex;
`;

export default Shifter;
