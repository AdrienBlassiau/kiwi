import React, { useState } from 'react';
import styled from 'styled-components';

const SeeMoreItem = (props) =>{

  let Icon = props.Icon;
  let onClickFun =  props.onClickFun;
  let text = props.text;
  let selector = props.selector;

  let preparedComponent =
        <SeeMoreListItemStyle onClick={onClickFun}>
          {Icon ?
          <SeeMoreItemIconStyle>
            <Icon add={selector}/>
          </SeeMoreItemIconStyle>:null}
          <SeeMoreItemTextStyle>
            {text}
          </SeeMoreItemTextStyle>
        </SeeMoreListItemStyle>;

  return (preparedComponent)
};

const SeeMoreItemIconStyle = styled.div`
  margin-right: 20px;
  width: 20px;
`;

const SeeMoreItemTextStyle = styled.div`
  color: var(--text-intermediate);
`;

const SeeMoreListItemStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 0;
  margin-bottom: 10px;
  padding: 5px;
  height: 20px;
  &:hover{
    background-color:${props => props.onClick ? "var(--background-contrast);":"transparent"}
  }
`;

export default SeeMoreItem;
