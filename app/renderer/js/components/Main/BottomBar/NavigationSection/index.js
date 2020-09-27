import React from 'react';
import styled from 'styled-components';
import IconSkipBackward from '../../../Icon/IconSkipBackward';
import IconSkipForward from '../../../Icon/IconSkipForward';
import IconPlayBig from '../../../Icon/IconPlayBig';
import { textPrimaryColor } from '../../../../utils/color';

const BottomNavigationSection = () =>{

  let preparedComponent =
    <BottomNavigationSectionStyle>
      <IconSkipBackward color={textPrimaryColor}/>
      <IconPlayBig color={textPrimaryColor}/>
      <IconSkipForward color={textPrimaryColor}/>
    </BottomNavigationSectionStyle>;

  return (preparedComponent)
};

const BottomNavigationSectionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  margin: 0 20px;
`;

export default BottomNavigationSection;
