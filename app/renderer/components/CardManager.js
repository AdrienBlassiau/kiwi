import React, { useState, useEffect } from 'react';
import InfiniteScroll from './InfiniteScroll';
import ContentLoader from 'react-content-loader';
import ContentCard from './ContentCard';
import ReactDOM from 'react-dom';

// import Style from '../css/CardManagerCss.js';

const CardManager = (props) => {
  const myLocalRef = React.createRef();

  const component = ReactDOM.findDOMNode(myLocalRef.current);

  const fetchMoreListItems = () => {
    setTimeout(() => {
      props.getMovies();
      setIsFetching(false);
    }, 1000);
  };

  const [isFetching, setIsFetching] = InfiniteScroll(props.myRef, fetchMoreListItems);

  const content = props.moviesData ? (
    props.moviesData.map((movie, index) => (
      <ContentCard
        key={index}
        movie={movie}
        driver={props.driver}
        setIsPlaying={props.setIsPlaying}
        setUrl={props.setUrl}
        setCurrentMovie={props.setCurrentMovie}
        setShowModal={props.setShowModal}
      />
    ))
  ) : (
    <div></div>
  );

  const MyLoader = (props) => (
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

  const hasMore = props.hasMore;

  return (
    <div ref={myLocalRef} className="popular-movies-list">
      {content}
      {hasMore && isFetching && loader}
    </div>
  );
};

export default CardManager;
