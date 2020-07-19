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
  const configureGrid = props.configureGrid;
  const gridInfos = props.gridInfos;
  const snack = props.snack;

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
          gridInfos={gridInfos}
          snack={snack}
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
