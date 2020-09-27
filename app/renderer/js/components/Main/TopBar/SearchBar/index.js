import React from 'react';
import styled from 'styled-components';
import IconSearch from '../../../Icon/IconSearch';
import SearchZone from './SearchZone/index.js';
import CloseSearch from './CloseSearch/index.js';
import SuggestionBox from './SuggestionBox/index.js';

const SearchBar = () =>{

  let preparedComponent =
    <SearchBarStyle>
      <IconSearch color={"var(--text-primary)"}/>
      <SearchZone/>
      <CloseSearch />
      <SuggestionBox/>
    </SearchBarStyle>;

  return (preparedComponent)
};

const SearchBarStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
`;

export default SearchBar;
