import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import { usePalette } from 'react-palette';
import { directSearchStream } from '../scrapper/index.js';
import VideoPlayer from './VideoPlayer';
import VideoLoader from './VideoLoader';

const PlayerContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieUrl, setMovieUrl] = useState(null);
  const { cacheData, setCacheData } = props.cache;
  const driver = props.driver;

  console.log("On entre, voici l'etat du cache : ", cacheData);
  const url = props.currentMovieUrl;
  const streamData = props.cache.cacheData[url].streamData;
  console.log('On va envoyer :', streamData);

  useEffect(() => {
    const callback = (res, name) => {
      console.log(name);
      const scrapperData = props.cache.cacheData[url].streamData[name];
      console.log('previous:', scrapperData);
      const newScrapperData = { ...scrapperData, resolve: res };
      console.log('after:', newScrapperData);

      const newStreamData = { ...streamData, [name]: newScrapperData };
      console.log(newStreamData);
      setCacheData((prevState) => ({
        ...prevState,
        [url]: { ...cacheData[url], streamData: newStreamData },
      }));
      setMovieUrl(res);
    };

    directSearchStream(
      {
        streamData: streamData,
        driver: driver,
        is_movie: true,
      },
      0,
      0,
      callback,
    );

    // directSearchStream(5, url, props.driver, setMovieUrl);
    console.log('END');
  }, []);

  console.log('MOVIE URL', movieUrl ? movieUrl[0].url : 'NOT ok');

  const videoPlayer = !movieUrl ? (
    <VideoLoader message={"Scrapping ..."}/>
  ) : (
    <React.Fragment>
      <div className={'custom-react-player-master ' + (isLoading ? 'player-none' : 'player-block')}>
        <VideoPlayer movieUrl={movieUrl[0].url} setIsLoading={setIsLoading} isLoading={isLoading} />
      </div>
      {isLoading ? <VideoLoader message={"Loading the video ..."}/> : null}
    </React.Fragment>
  );

  // const videoPlayer = (
  //   <VideoPlayer
  //     movieUrl="https://streamtape.com/get_video?id=zxxePLx4JRSYVwx&expires=1594919993&ip=FOSOD0xEDOONFt&token=AJeKKWaPVgZM"
  //     setIsLoading={setIsLoading}
  //   />
  // );

  const overview = props.currentMovieData.overview;

  return (
    <div className="video-player-and-infos-container">
      <div className="video-player-container">{videoPlayer}</div>
      <div className="video-bottom-info">
        <div className="video-bottom-info-title">Summary: </div>
        <div className="video-bottom-info-content">{overview}</div>
      </div>
    </div>
  );
};

export default PlayerContainer;
