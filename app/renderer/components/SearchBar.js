import React, { useState, useEffect } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import axios from 'axios';
import { getMovies } from '../controllers';

const SearchBar = (props) => {
  const { active, value, label, result } = props.getters.search;
  const { setActive, setValue, setLabel, setResult } = props.setters.search;
  const { moviesData, gridType, gridInfos, page, hasMore } = props.getters.grid;
  const {
    setMoviesData,
    setGridType,
    setGridInfos,
    setPage,
    setHasMore,
    configureGrid,
  } = props.setters.grid;

  const cache = props.cache;

  const searchMovies = (query) => {
    const callback = (data, url) => {
      console.log("VOICI CE QUE L'on met");
      console.log(data);
      setResult(data);
      setMoviesData(moviesData.concat(data));
      setHasMore(data.length - 1 > 0);
    };

    getMovies([page, query], callback, 'search', cache);
    setPage(page + 1);
  };

  const changeValue = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const handleKeyPress = (event) => {
    if (event.which === 13) {
      const query = encodeURI(value);
      console.log('avant', gridInfos, 'apres', query);
      if (gridInfos != query) {
        configureGrid('search', query);
      }
    }
  };

  useEffect(() => {
    console.log('On change les infos');
  }, [gridInfos]);

  const closeSearch = () => {
    // console.log("RANDOM: ",Math.random())
    configureGrid('popular', Math.random());
  };

  const predicted = 'California';
  const locked = false;

  const fieldClassName = `field ${(locked ? active : active || value) && 'active'} ${
    locked && !active && 'locked'
  }`;

  return (
    <div className="main-search-container">
      <div className="custmom-search-bar">
        <div className={'search-icon-master ' + (active ? 'active-color' : '')}>
          <SearchIcon style={{ color: active ? 'var(--dark-color)' : 'white' }} />
        </div>
        <div className="search-data-master">
          <div className={'field ' + (active ? 'active' : '')}>
            <input
              id={1}
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
        {gridType === 'search' ? (
          <div className={'close-icon-master ' + (active ? 'active-color' : '')}>
            <CloseIcon
              onClick={closeSearch}
              style={{ color: active ? 'var(--dark-color)' : 'white' }}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
