import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../../Navbar/index';
import Duration from '../../../../utils/Duration.js';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from '../../../../store/streamingPage';

const MediaProgressBar = () =>{

  const currentTime = useSelector(state => state.streaming.currentTime);

  const dispatch = useDispatch();

  const setCurrent = (currentTime) => {
    dispatch(setCurrentTime({currentTime:currentTime}));
  }

  let duration = 2680;

  let preparedComponent =
    <MediaProgressBarStyle>
      <MediaCurrentTimeStyle>
        <Duration seconds={currentTime} showMs={false} />
      </MediaCurrentTimeStyle>
      <Navbar
        additionalBars={[]}
        color={"linear-gradient(1deg,#EF5466,#CA2A36)"}
        barHeight={2}
        barWidth={600}
        max={duration}
        setCurrent={setCurrent}
        current={currentTime}
        formatter={ (s) => <Duration seconds={s} showMs={false} />}/>
      <MediaEndTimeStyle>
        <Duration seconds={duration} showMs={false} />
      </MediaEndTimeStyle>
    </MediaProgressBarStyle>;

  return (preparedComponent)
};

const MediaCurrentTimeStyle = styled.div`
  font-size: 10px;
  color: var(--text-intermediate);
  margin-right: 10px;
  width: 40px;
  text-align: end;
`;

const MediaEndTimeStyle = styled.div`
  font-size: 10px;
  color: var(--text-intermediate);
  margin-left: 10px;
  width: 40px;
`;

const MediaProgressBarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default MediaProgressBar;
