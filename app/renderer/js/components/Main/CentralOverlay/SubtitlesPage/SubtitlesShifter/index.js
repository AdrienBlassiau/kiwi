import React from 'react';

import styled from 'styled-components';
import IconReloadLittle from '../../../../Icon/IconReloadLittle';
import { textIntermediateColor, textPrimaryColor } from '../../../../../utils/color';
import {DurationWithShift} from '../../../../../utils/DurationWithShift';
import Duration from '../../../../../utils/Duration';

const SubtitlesShifter = (props) =>{

  const setShiftStatus = props.setShiftStatus;
  const shiftStatus = props.shiftStatus;
  const shift = props.shift;
  const setShift = props.setShift
  const currentTime = props.currentTime

  const reloadShift = () => {
    console.log("on reload")
    setShift(0.);
  }

  let preparedComponent =
    <SubtitlesShifterStyle>
        <SubtitlesShifterShiftStyle>
          <Duration seconds={currentTime} showMs={true} />
          <DurationWithShift seconds={0} showMs={true} shift={-shift}/>
        </SubtitlesShifterShiftStyle>
        <SubtitlesShifterStatusStyle onClick={() => setShiftStatus(!shiftStatus)}>
          {shiftStatus ? "shift active" : "navigation active"}
        </SubtitlesShifterStatusStyle>
        <SubtitlesShifterReloadStyle
          shiftStatus={shiftStatus}
          onClick={reloadShift}>
          <IconReloadLittle color={shiftStatus ? textPrimaryColor : textIntermediateColor}/>
        </SubtitlesShifterReloadStyle>
    </SubtitlesShifterStyle>;

  return (preparedComponent)
};

const SubtitlesShifterShiftStyle = styled.div`
  margin-right: 10px;
`;

const SubtitlesShifterStatusStyle = styled.div`
  cursor: pointer;
  margin-right: 10px;
  width: 80px;
  text-align: center;
`;

const SubtitlesShifterReloadStyle = styled.div`
  color: red;
  padding: 5px;
  border-radius 50%;
  margin-right: 5px;
  cursor: ${props => props.shiftStatus ? "pointer" : "normal"};
`;

const SubtitlesShifterStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
`;

export default SubtitlesShifter;
