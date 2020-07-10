import React, { useState, useEffect } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const SearchBar = (props) => {
  const { active, value, label, result } = props.getters.search;
  const { setActive, setValue, setLabel, setResult } = props.setters.search;

  const API = (query) => {
    return (
      'https://api.themoviedb.org/3/search/movie?api_key=0ec464bc3151bee6274e541b3030fa57&query=' +
      query +
      '&language=en-US&page=1&include_adult=true'
    );
  };

  const searchMovie = (pageNumber) => {
    const url = API(pageNumber);
    console.log(url);
    axios.get(API(pageNumber)).then((response) => {
      let data = response.data.results;
      // console.log( 'On a des desta' )
      // console.log( data )
      console.log(data);
      setResult(data);
    });
  };

  const changeValue = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const handleKeyPress = (event) => {
    if (event.which === 13) {
      const encoded = encodeURI(value);
      searchMovie(encoded);
    }
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
      </div>
    </div>
  );
};

export default SearchBar;
