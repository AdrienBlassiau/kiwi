import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import ContentCard from './ContentCard';
import ReactDOM from 'react-dom';

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

  const moreItems = [...Array(itemsToAdd)].map((e, i) => (
    <div className="card-loader-style" key={i}>
      <div className="invisible-item"></div>
    </div>
  ));

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
      {isFetching ? null : moreItems}
    </React.Fragment>
  ) : (
    <div></div>
  );

  const MyLoader = () => (
    <ContentLoader
      speed={2}
      width={170}
      height={325}
      viewBox="0 0 170 325"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="0" ry="0" width="150" height="225" />
      <rect x="0" y="251" rx="0" ry="0" width="150" height="20" />
      <rect x="0" y="281" rx="0" ry="0" width="150" height="20" />
    </ContentLoader>
  );

  const loader = [...Array(20)].map((e, i) => (
    <div className="card-loader-style" key={i}>
      <MyLoader />
    </div>
  ));

  return (
    <div className="popular-movies-list">
      {content}
      {hasMore && isFetching && loader}
    </div>
  );
};

export default CardManager;
