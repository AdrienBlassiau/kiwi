import React, { useState, useEffect } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import axios from 'axios';
import { getMovies } from '../controllers';

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
    <div className="main-search-container">
      <div className="custom-search-bar">
        {/*<div className={'search-icon-master ' + (active ? 'active-color' : '')}>*/}
        <div className={'search-icon-master '}>
          {/*<SearchIcon style={{ color: active ? 'var(--dark-color)' : 'white' }} />*/}
          <SearchIcon style={{ color: 'var(--grey-letter-color)' }} />
        </div>
        <div className="search-data-master">
          <div className={'field ' + (active ? 'active' : '')}>
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
          </div>
        </div>
        {gridInfos.style === 'search' ? (
          <div className={'close-icon-master ' + (active ? 'active-color' : '')}>
            <CloseIcon onClick={closeSearch} style={{ color: 'var(--grey-letter-color)' }} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
