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
  const [movieUrl, setMovieUrl] = useState(null);
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    let newUrlList = [];
    const cacheDataMovie = props.cache.cacheData[id];
    if(cacheDataMovie){
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

  console.log('On entre, voici les datas: ', currentMovieData);
  const id = currentMovieData.id;
  const cacheDataMovie = props.cache.cacheData[id];
  // const streamData = props.cache.cacheData[id].streamData;
  console.log('On va envoyer :', cacheDataMovie);
  // const streamData = cacheDataMovie.streamData;
  // const hasStreamData = cacheDataMovie.hasOwnProperty('streamData');
  // const streamData = cacheDataMovie.streamData;
  // const urlData = hasStreamData
  //   ? Object.entries(streamData).map((item) => {
  //       console.log('>>>>>>>>>>>>>>>>><< ITEM:', item);
  //     })
  //   : null;
  // console.log('URL LIST', urlList);

  const urlShow = urlList.map((item, key) => {
    return <div key={key}>{item.url}</div>;
  });
  // console.log('MOVIE URL', movieUrl ? movieUrl[0].url : 'NOT ok');

  // const videoPlayer = !movieUrl ? (
  //   <VideoLoader message={"Scrapping ..."}/>
  // ) : (
  //   <React.Fragment>
  //     <div className={'custom-react-player-master ' + (isLoading ? 'player-none' : 'player-block')}>
  //       <VideoPlayer movieUrl={movieUrl[0].url} setIsLoading={setIsLoading} isLoading={isLoading} />
  //     </div>
  //     {isLoading ? <VideoLoader message={"Loading the video ..."}/> : null}
  //   </React.Fragment>
  // );

  const videoPlayer = (
    <VideoPlayer
      movieUrl="http://streamtape.com/get_video?id=LLYRgdqmJdC6Km&expires=1595190302&ip=FOSOD0xEDOONFt&token=M2zX_F3Flw_U"
      setIsLoading={setIsLoading}
    />
  );

  const overview = props.currentMovieData.overview;

  return (
    <div className="video-player-and-infos-container">
      <div className="video-player-container">{videoPlayer}</div>
      <div className="video-bottom-info">
        <div className="video-bottom-info-title">Summary: </div>
        <div className="video-bottom-info-content">{urlShow}</div>
      </div>
    </div>
  );
};

export default PlayerContainer;
