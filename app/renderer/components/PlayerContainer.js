import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import { usePalette } from 'react-palette';
import { directSearchStream } from '../scrapper/index.js';
import VideoPlayer from './VideoPlayer';
import VideoLoader from './VideoLoader';

const PlayerContainer = (props) => {
  const { cacheData, setCacheData } = props.cache;
  const currentMovieData = props.currentMovieData;

  const [isLoading, setIsLoading] = useState(true);
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    let newUrlList = [];
    const id = currentMovieData.id;
    const cacheDataMovie = props.cache.cacheData[id];
    if (cacheDataMovie) {
      const hasStreamData = cacheDataMovie.hasOwnProperty('streamData');
      const streamData = cacheDataMovie.streamData;
      if (hasStreamData) {
        for (const item in streamData) {
          const currentItem = streamData[item];
          if (currentItem && currentItem.hasOwnProperty('resolve')) {
            console.log('>>>>>>>>>>>>>>>>><< RES:', currentItem.resolve);
            const resolved = currentItem.resolve;
            if (currentItem.resolve.length > 0) {
              console.log('>>>>>>>>>>>>>>>>><< DATA:', resolved);
              console.log('NEW URL LIST:', newUrlList);
              newUrlList = newUrlList.concat(resolved);
            }
          }
        }
      }
    }
    console.log(newUrlList);
    setUrlList(newUrlList);
  }, [props.cache]);

  const urlShow = urlList.map((item, key) => {
    return (
      <div key={key}>
        {item.type} {item.language} {item.quality}
      </div>
    );
  });

  // console.log('MOVIE URL', movieUrl ? movieUrl[0].url : 'NOT ok');

  console.log('URL LIST:', urlList);
  const videoPlayer =
    urlList.length === 0 ? (
      <VideoLoader message={'Scrapping ...'} />
    ) : (
      <React.Fragment>
        <div
          className={'custom-react-player-master ' + (isLoading ? 'player-none' : 'player-block')}>
          <VideoPlayer
            movieUrl={urlList[0].url}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            serverList={urlList}
          />
        </div>
        {isLoading ? <VideoLoader message={'Loading the video ...'} /> : null}
      </React.Fragment>
    );

  // const videoPlayer = (
  //   <VideoPlayer
  //     movieUrl="http://streamtape.com/get_video?id=dp6le28X6YCgd0&expires=1595508847&ip=FOSOD0xEDOONFt&token=pw_ug07kccxW"
  //     setIsLoading={setIsLoading}
  //     isLoading={isLoading}
  //     serverList={urlList}
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
