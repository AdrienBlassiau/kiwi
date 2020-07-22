import React, { useState, useEffect, useRef } from 'react';

import SearchBar from './SearchBar';

import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AppsIcon from '@material-ui/icons/Apps';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const SelectionBar = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const gridInfos = props.gridInfos;
  const configureGrid = props.configureGrid;

  const changeType = (type) => {
    configureGrid({ ...gridInfos, type: type, style: 'popular' });
  };

  const isMovie = () => {
    console.log(gridInfos.type);
    return gridInfos.type === 'movie';
  };

  const isTV = () => {
    return gridInfos.type === 'tv';
  };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className="search-and-select-container">
      <SearchBar getters={props.getters} setters={props.setters} cache={props.cache} />
      <div className="selection-movies-container">
        <div className="change-content-type-container">
          <div
            className={'content-type-container ' + (isMovie() ? 'select' : 'not-select')}
            onClick={() => changeType('movie')}>
            Movies
          </div>
          <div
            className={'content-type-container ' + (isTV() ? 'select' : 'not-select')}
            onClick={() => changeType('tv')}>
            TV Shows
          </div>
        </div>
        <div className="change-content-card-container">
          <div className="change-content-filter-and-style-container">
            <div className="content-style-container">
              <div>DECADE</div>
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div className="content-style-container">
              <div>GENRE</div>
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div className="content-filter-container">
              <div className="sort-content-container">Sort By</div>
              <div className="content-style-container">
                <div>GENRE</div>
                <div>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="change-card-display-container">
            <AppsIcon />
            <ViewComfyIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionBar;
