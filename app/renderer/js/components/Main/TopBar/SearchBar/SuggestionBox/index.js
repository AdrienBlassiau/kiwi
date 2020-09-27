import React from 'react';
import styled from 'styled-components';
import SuggestionLine from './SuggestionLine/index.js';
import { useSelector } from 'react-redux';

const SuggestionBox = () =>{

  const focus = useSelector(state => state.search.focus);

  let preparedComponent =
    <SuggestionBoxStyle>
      <BoxTitleStyle>
        Last Search
      </BoxTitleStyle>
      <SuggestionLineBoxStyle>
        <SuggestionLine text={"Test1"} timeValue={"1 hour ago"}/>
        <SuggestionLine text={"Test2"} timeValue={"2 hours ago"}/>
        <SuggestionLine text={"Test3"} timeValue={"12 weeks ago"}/>
        <SuggestionLine text={"Test4"} timeValue={"2 days ago"}/>
        <SuggestionLine text={"Test4"} timeValue={"2 days ago"}/>
        <SuggestionLine text={"Test4"} timeValue={"2 days ago"}/>
        <SuggestionLine text={"Test4"} timeValue={"2 days ago"}/>
      </SuggestionLineBoxStyle>
    </SuggestionBoxStyle>

  return (focus ? preparedComponent : null)
};

const SuggestionLineBoxStyle = styled.div`
  max-height: 200px;
  overflow: auto;
`;

const BoxTitleStyle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 15px 15px 10px 15px;
`;

const SuggestionBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary);
  position: absolute;
  top: 60px;
  left: 10px;
  width: 670px;
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  z-index: 20;
`;

export default SuggestionBox;



