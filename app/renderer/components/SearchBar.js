import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const SearchBar = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const { active, value, label } = props.getters.search;
  const { setActive, setValue, setLabel } = props.setters.search;
  const {
    moviesData,
    gridInfos,
    page,
    hasMore,
    numberPerLine,
    itemsToAdd,
    isFetching,
    scroll,
    getMoviesGrid,
  } = props.getters.grid;
  const {
    setMoviesData,
    setGridInfos,
    setPage,
    setHasMore,
    configureGrid,
    setNumberPerline,
    setItemsToAdd,
    setIsFetching,
    setScroll,
  } = props.setters.grid;

  const changeValue = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const closeSearch = () => {
    const infos = { ...gridInfos, style: 'popular', query: '' };
    setValue('');
    configureGrid(infos);
  };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const handleKeyPress = (event) => {
    if (event.which === 13) {
      const query = encodeURI(value);
      if (gridInfos != query) {
        const infos = { ...gridInfos, style: 'search', query: query };
        configureGrid(infos);
      }
    }
  };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <MainSearchContainer>
      <CustomSearchBar>
        <SearchIconMaster>
          <SearchIcon style={{ color: 'var(--grey-letter-color)' }} />
        </SearchIconMaster>
        <SearchDataMaster>
          <ImputField active={active}>
            <input
              id={'input-id'}
              type="text"
              value={value}
              placeholder={label}
              onChange={changeValue}
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              onKeyPress={handleKeyPress}
            />
          </ImputField>
        </SearchDataMaster>
        {gridInfos.style === 'search' ? (
          <CloseIconMaster>
            <CloseIcon onClick={closeSearch} style={{ color: 'var(--grey-letter-color)' }} />
          </CloseIconMaster>
        ) : (
          <div></div>
        )}
      </CustomSearchBar>
    </MainSearchContainer>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const CloseIconMaster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

const ImputField = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    color: var(--main-text-color);
    input {
        color: var(--main-text-color);
        width: 100%;
        height: 100%;
        position: relative;
        // padding: 0px 16px;
        border: none;
        border-radius: 4px;
        font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        background-color: transparent;
        outline: none;
        box-shadow: 0px 4px 20px 0px transparent;
          0.1s padding ease-in-out;
        -webkit-appearance: none;
    }
  `;

const MainSearchContainer = styled.div`
  display: flex;
  width: 100%;
  color: white;
  padding: 0;
  line-height: 30px;
  justify-content: left;
  overflow: visible;
  box-sizing: border-box;
  width: 100%;
  font-size: 13px;
  overflow: hidden;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  user-select: none;
  zoom: 1;
  line-height: 22px;
  height: 50px;
  display: flex;
  z-index: 99998;
  margin-bottom: 5px;
`;

const CustomSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  // background-color: var(--dark-color);
  border-radius: 5px;
  height: 50px;
  width: 100%;
  // max-width: 800px;
`;

const SearchIconMaster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  height: 100%;
  border-radius: 5px 0 0 5px;
`;

const SearchDataMaster = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 0 5px 5px 0;
  color: var(--main-text-color);
`;

export default SearchBar;
