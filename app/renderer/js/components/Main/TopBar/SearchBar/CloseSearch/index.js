import React, { useState } from 'react';
import IconCloseSearch from '../../../../Icon/IconCloseSearch';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CloseSearch = () =>{

  const [mouseOver, setMouseOver] = useState(false);
  const opacity = mouseOver ? 0.80 : 0.12;

  const focus = useSelector(state => state.search.focus);

  let preparedComponent =
    <CloseSearchContainerStyle
      onMouseEnter={(e) => {e.stopPropagation(); setMouseOver(true)}}
      onMouseLeave={(e) => {e.stopPropagation(); setMouseOver(false)}}
    >
      <IconCloseSearch
        color={"#191922"} opacity={opacity}/>
    </CloseSearchContainerStyle>

  return (focus ? preparedComponent : null)
};

const CloseSearchContainerStyle = styled.div`
  line-height: 0;
  cursor: pointer;
`;

export default CloseSearch;



