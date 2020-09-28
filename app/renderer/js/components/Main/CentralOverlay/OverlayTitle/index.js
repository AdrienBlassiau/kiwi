import React from 'react';

import styled from 'styled-components';
import IconBigChevronDown from '../../../Icon/IconBigChevronDown';
import { textPrimaryColor } from '../../../../utils/color';

const OverlayTitle = (props) =>{
  let title = props.title;
  let leftComponent = props.leftComponent;
  let backFun = props.backFun;

  let preparedComponent =
    <OverlayTitleStyle>
      {leftComponent}
      <OverlayTitleTextStyle>
        {title}
      </OverlayTitleTextStyle>
      {backFun ?
        <OverlayTitleIconStyle onClick={backFun}>
          <IconBigChevronDown color={textPrimaryColor}/>
        </OverlayTitleIconStyle> : null}
    </OverlayTitleStyle>;

  return (preparedComponent)
};

const OverlayTitleIconStyle = styled.div`
  margin-right: 10px;
  cursor: pointer;
  align-self: center;
`;

const OverlayTitleTextStyle = styled.div`
`;

const OverlayTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  color: var(--text-primary);
  font-weight: bold;
  margin-bottom: 30px;
  z-index: 100;
`;

export default OverlayTitle;
