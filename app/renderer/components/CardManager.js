import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import ContentCard from './ContentCard';
import ReactDOM from 'react-dom';

import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AppsIcon from '@material-ui/icons/Apps';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const CardManager = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const hasMore = props.hasMore;
  const isFetching = props.isFetching;
  const moviesData = props.moviesData;
  const setCurrentMovieBasics = props.setCurrentMovieBasics;
  const setShowModal = props.setShowModal;
  const itemsToAdd = props.itemsToAdd;
  const callQueue = props.callQueue;
  const setCallQueue = props.setCallQueue;

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  // const moreItems = [...Array(itemsToAdd)].map((e, i) => (
  //   <div className="card-loader-style" key={i}>
  //     <div className="invisible-item"></div>
  //   </div>
  // ));

  const content = moviesData ? (
    <React.Fragment>
      {moviesData.map((movie, index) => (
        <ContentCard
          key={index}
          movie={movie}
          callQueue={callQueue}
          setCallQueue={setCallQueue}
          setCurrentMovieBasics={setCurrentMovieBasics}
          setShowModal={setShowModal}
        />
      ))}
{/*      {isFetching ? null : moreItems}*/}
    </React.Fragment>
  ) : (
    <div></div>
  );

  const MyLoader = () => (
    <ContentLoader
      speed={2}
      width={150}
      height={225}
      viewBox="0 0 150 225"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="0" ry="0" width="150" height="225" />
    </ContentLoader>
  );

  const loader = [...Array(20)].map((e, i) => (
    <div className="card-loader-style" key={i}>
      <MyLoader />
    </div>
  ));

  const selection =
  <div className="selection-movies-container">
    <div className="change-content-type-container">
      <div className="content-type-container">Movies</div>
      <div className="content-type-container">TV Shows</div>
    </div>
    <div className="change-content-card-container">
      <div className="change-content-filter-and-style-container">
        <div className="content-style-container">
          <div>DECADE</div>
          <div><KeyboardArrowDownIcon /></div>
        </div>
        <div className="content-style-container">
          <div>GENRE</div>
          <div><KeyboardArrowDownIcon /></div>
        </div>
        <div className="content-filter-container">
          <div className="sort-content-container">Sort By</div>
          <div className="content-style-container">
            <div>GENRE</div>
            <div><KeyboardArrowDownIcon /></div>
          </div>
        </div>
      </div>
      <div className="change-card-display-container">
        <AppsIcon fontSize="medium"/>
        <ViewComfyIcon fontSize="medium"/>
      </div>
    </div>
  </div>

  return (
    <div className="popular-movies-list">
      {selection}
      {content}
      {hasMore && isFetching && loader}
    </div>
  );
};

export default CardManager;
