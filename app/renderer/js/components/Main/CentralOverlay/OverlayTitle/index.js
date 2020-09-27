import React from 'react';

import styled from 'styled-components';
import IconBigChevronDown from '../../../Icon/IconBigChevronDown';
import { textPrimaryColor } from '../../../../utils/color';

const OverlayTitle = (props) =>{
  let title = props.title;
  let backFun = props.backFun;

  let preparedComponent =
    <OverlayTitleStyle backFun={backFun}>
      {backFun ?
        <OverlayTitleIconStyle onClick={backFun}>
          <IconBigChevronDown color={textPrimaryColor}/>
        </OverlayTitleIconStyle> : null}
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
  line-height: ${props => props.backFun ? "0": "inherit"};
  font-size: 22px;
  color: var(--text-primary);
  font-weight: bold;
  margin-bottom: 30px;
`;

export default OverlayTitle;
