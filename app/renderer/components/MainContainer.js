import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';
import ContentDisplay from './ContentDisplay';
import Modal from './Modal';

import { getMovies } from '../controllers/';

const MainContainer = (props) => {
  const { cacheData } = props.getters.cache;
  const { driver } = props.getters.driver;
  const {
    moviesData,
    gridType,
    gridInfos,
    page,
    hasMore,
    numberPerLine,
    itemsToAdd,
    isFetching,
    scroll,
    getMoviesGrid
  } = props.getters.grid;
  const {
    currentMovieId,
    currentMovieUrl,
    currentMovieData,
    showModal,
    isPlaying,
  } = props.getters.movie;

  const { setCacheData } = props.setters.cache;
  const {
    setMoviesData,
    setGridType,
    setGridInfos,
    setPage,
    setHasMore,
    configureGrid,
    setNumberPerline,
    setItemsToAdd,
    setIsFetching,
    setScroll
  } = props.setters.grid;
  const {
    setCurrentMovieId,
    setCurrentMovieUrl,
    setCurrentMovieData,
    setShowModal,
    setIsPlaying,
    onCloseModal
  } = props.setters.movie;

  const cache = { cacheData, setCacheData };
  const myRef = useRef(null);


  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (isFetching){
      setIsFetching(false);
    }
  }, [moviesData]);

  useEffect(() => {
    if (isFetching){
      setTimeout(() => {
        getMoviesGrid();
      }, 1000);
    }
  }, [isFetching]);

  useEffect(() => {
    if (scroll && !isFetching){
      const component = ReactDOM.findDOMNode(myRef.current);
      if (component.scrollHeight != component.scrollTop + component.clientHeight || isFetching){
        return;
      }
      else{
        setIsFetching(true);
        return;
      }
    }
  }, [scroll]);

  const handleScroll = () => {
    const component = ReactDOM.findDOMNode(myRef.current);
    setScroll([component.scrollHeight,component.scrollTop,component.clientHeight])
  }

  useEffect(() => {
    const component = ReactDOM.findDOMNode(myRef.current);
    component.addEventListener('scroll', handleScroll);
    return () => component.removeEventListener('scroll', handleScroll);
  }, []);


  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const display = isPlaying ? (
    <PlayerContainer
      currentMovieUrl={currentMovieUrl}
      currentMovieData={currentMovieData}
      driver={driver}
      cache={cache}
      setIsPlaying={setIsPlaying}
    />
  ) : (
    <React.Fragment>
      <CardManager
        hasMore={hasMore}
        isFetching={isFetching}
        moviesData={moviesData}
        driver={driver}
        setIsPlaying={setIsPlaying}
        setCurrentMovieId={setCurrentMovieId}
        setShowModal={setShowModal}
        cache={cache}
        gridInfos={gridInfos}
        itemsToAdd={itemsToAdd}
      />
      {showModal ? (
        <Modal onClose={onCloseModal} show={showModal}>
          <ContentDisplay
            currentMovieId={currentMovieId}
            currentMovieUrl={currentMovieUrl}
            currentMovieData={currentMovieData}
            setCurrentMovieData={setCurrentMovieData}
            setCurrentMovieUrl={setCurrentMovieUrl}
            driver={driver}
            setIsPlaying={setIsPlaying}
            cache={cache}
          />
        </Modal>
      ) : null}
    </React.Fragment>
  );
  return (
    <div ref={myRef} className={isPlaying ? 'main-container-reduced' : 'main-container'}>
      {display}
    </div>
  );
};

export default MainContainer;
