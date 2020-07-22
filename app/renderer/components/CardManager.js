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
  const setCurrentMovieId = props.setCurrentMovieId;
  const setShowModal = props.setShowModal;
  const gridInfos = props.gridInfos;

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const content = moviesData ? (
    <React.Fragment>
      {moviesData.map((movie, index) => (
        <ContentCard
          key={index}
          movie={movie}
          setCurrentMovieId={setCurrentMovieId}
          setShowModal={setShowModal}
          gridInfos={gridInfos}
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

  return (
    <div className="popular-movies-list">
      {content}
      {hasMore && isFetching && loader}
    </div>
  );
};

export default CardManager;
