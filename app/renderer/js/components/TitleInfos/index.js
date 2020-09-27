import React from 'react';
import styled from 'styled-components';

const TitleInfos = (props) =>{

  let text = props.text;
  let mouseOver = props.mouseOver;

  let preparedComponent =
      <TitleInfosContainerStyle>
        <TitleInfosStyle>
          {text}
        </TitleInfosStyle>
      </TitleInfosContainerStyle>;

  return (mouseOver ? preparedComponent : null)
};

const TitleInfosStyle = styled.div`
  position: absolute;
  font-size: 10px;
  top: -15px;
  left: 50%;
  transform: translate(-50%, -15%);
  width: max-content;
  text-align: center;
  background-color: var(--title-background);
  color: var(--background-primary);
  padding: 5px;
`;

const TitleInfosContainerStyle = styled.div`
  position: relative;
  top: -12px;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    width: 0;
    height: 0;
    border-top: solid 10px var(--title-background);
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
  }
`;

export default TitleInfos;
