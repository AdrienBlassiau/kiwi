import React, { useState } from 'react';
import styled from 'styled-components';
import IconRecentlySearched from '../../../../../Icon/IconRecentlySearched';

const SuggestionLine = (props) =>{

  let text = props.text;
  let timeValue = props.timeValue;

  const [mouseOver, setMouseOver] = useState(false);

  let preparedComponent =
    <SuggestionLineStyle
      onMouseEnter={(e) => {e.stopPropagation(); setMouseOver(true)}}
      onMouseLeave={(e) => {e.stopPropagation(); setMouseOver(false)}}
      mouseOver={mouseOver}
    >
      <SuggestionLineText>
        {text}
      </SuggestionLineText>
      <SuggestionLineTime>
        <SuggestionLineTimeValue>
          {timeValue}
        </SuggestionLineTimeValue>
        <SuggestionLineTimeIcon>
          <IconRecentlySearched color={"var(--text-intermediate)"}/>
        </SuggestionLineTimeIcon>
      </SuggestionLineTime>
    </SuggestionLineStyle>

  return (focus ? preparedComponent : null)
};


const SuggestionLineText = styled.div`
`;

const SuggestionLineTime = styled.div`
  display:flex;
  align-items: center;
  line-height:0;
`;

const SuggestionLineTimeValue = styled.div`
  font-size: 10px;
  color: var(--text-intermediate);
  padding-right: 10px;
`;

const SuggestionLineTimeIcon = styled.div`
`;


const SuggestionLineStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 7px;
  margin: 0 8px;
  background-color: ${props => props.mouseOver ? "var(--background-contrast)" : "transparent"};
  border-radius: 4px;
`;


export default SuggestionLine;



