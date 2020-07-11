import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import { usePalette } from 'react-palette';
import { directSearchStream } from '../scrapper/index.js';
import ReactPlayer from 'react-player';

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

  const videoPlayer = (
    <div>
      <div onClick={() => props.setIsPlaying(false)}>Playing :{streamData.fmovies.movieUrl}</div>
      {movieUrl ? (
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player fixed-bottom"
            url={movieUrl[0].url}
            width="100%"
            height="100%"
            controls={true}
            volume={1}
          />
        </div>
      ) : null}
    </div>
  );

  return videoPlayer;
};

export default PlayerContainer;
