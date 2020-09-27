import React from 'react';

import styled from 'styled-components';
import IconChevronSeeBefore from '../../../Icon/IconChevronSeeBefore';

const MainTitle = (props) =>{
  let title = props.title;
  let backFun = props.backFun;

  let preparedComponent =
    <MainTitleStyle backFun={backFun}>
      {backFun ?
      <MainTitleIconStyle onClick={backFun}>
        <IconChevronSeeBefore color={"var(--text-primary)"}/>
      </MainTitleIconStyle> : null}
      <MainTitleTextStyle>
        {title}
      </MainTitleTextStyle>
    </MainTitleStyle>;

  return (preparedComponent)
};

const MainTitleIconStyle = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const MainTitleTextStyle = styled.div`
`;

const MainTitleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: ${props => props.backFun ? "0": "inherit"};
  font-size: 22px;
  color: var(--text-primary);
  font-weight: bold;
  margin-bottom: 30px;
`;

export default MainTitle;
