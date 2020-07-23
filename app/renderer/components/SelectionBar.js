import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

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

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <SearchAndSelectContainer>
      <SearchBar getters={props.getters} setters={props.setters} cache={props.cache} />
      <SelectionMoviesContainer>
        <ChangeContentTypeContainer>
          <ContentTypeContainerMovie type={gridInfos.type} onClick={() => changeType('movie')}>
            Movies
          </ContentTypeContainerMovie>
          <ContentTypeContainerTV type={gridInfos.type} onClick={() => changeType('tv')}>
            TV Shows
          </ContentTypeContainerTV>
        </ChangeContentTypeContainer>
        <ChangeContentCardContainer>
          <ChangeContentFilterAndStyleContainer>
            <ContentStyleContainer>
              <div>DECADE</div>
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </ContentStyleContainer>
            <ContentStyleContainer>
              <div>GENRE</div>
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </ContentStyleContainer>
            <ContentFilterContainer>
              <SortContentContainer>Sort By</SortContentContainer>
              <ContentStyleContainer>
                <div>GENRE</div>
                <div>
                  <KeyboardArrowDownIcon />
                </div>
              </ContentStyleContainer>
            </ContentFilterContainer>
          </ChangeContentFilterAndStyleContainer>
          <ChangeCardDisplayContainer>
            <AppsIcon />
            <ViewComfyIcon />
          </ChangeCardDisplayContainer>
        </ChangeContentCardContainer>
      </SelectionMoviesContainer>
    </SearchAndSelectContainer>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const ContentTypeContainerTV = styled.div`
  margin-right: 10px;
  font-weight: 500 !important;
  cursor: pointer;
  color: ${({ type }) => (type === 'tv' && 'var(--main-color-3)') || 'var(--main-color-4)'};
`;

const ContentTypeContainerMovie = styled.div`
  margin-right: 10px;
  font-weight: 500 !important;
  cursor: pointer;
  color: ${({ type }) => (type === 'movie' && 'var(--main-color-3)') || 'var(--main-color-4)'};
`;

const ChangeContentCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChangeContentTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchAndSelectContainer = styled.div`
  width: 1590px;
`;

const SelectionMoviesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-bottom: 5px;
  border-bottom: 1px solid var(--main-color-4);
  font-weight: 100;
`;

const ChangeContentFilterAndStyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const ContentStyleContainer = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
  line-height: 0;
`;

const ContentFilterContainer = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
  line-height: 0;
`;

const SortContentContainer = styled.div`
  margin-right: 5px;
`;

const ChangeCardDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SelectionBar;
