import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import VideoLoader from './VideoLoader';
import VideoPlayer from './VideoPlayer';

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
            const resolved = currentItem.resolve;
            if (currentItem.resolve.length > 0) {
              newUrlList = newUrlList.concat(resolved);
            }
          }
        }
      }
    }
    setUrlList(newUrlList);
  }, [props.cache]);

  const urlShow = urlList.map((item, key) => {
    return (
      <div key={key}>
        {item.type} {item.language} {item.quality}
      </div>
    );
  });

  const videoPlayer =
    urlList.length === 0 ? (
      <VideoLoader message={'Scrapping ...'} />
    ) : (
      <React.Fragment>
        <CustomReactPlayerMaster isLoading={isLoading}>
          <VideoPlayer
            movieUrl={urlList[0].url}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            serverList={urlList}
          />
        </CustomReactPlayerMaster>
        {isLoading ? <VideoLoader message={'Loading the video ...'} /> : null}
      </React.Fragment>
    );

  // const videoPlayer = (
  //   <VideoPlayer
  //     movieUrl="https://s0.vudeo.net/2vp3s7gwzyvjdohilnbbroevyyanpqojgirh3dbrkielwfwlrntzmjgglzua/v.mp4"
  //     setIsLoading={setIsLoading}
  //     isLoading={isLoading}
  //     serverList={urlList}
  //   />
  // );

  const overview = props.currentMovieData.overview;

  return (
    <VideoPlayerAndInfosContainer>
      <VideoPlayerContainer>{videoPlayer}</VideoPlayerContainer>
      <VideoBottomInfos>
        <VideoBottomInfosTitle>Summary: </VideoBottomInfosTitle>
        <VideoBottomInfosContent>{overview}</VideoBottomInfosContent>
      </VideoBottomInfos>
    </VideoPlayerAndInfosContainer>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const CustomReactPlayerMaster = styled.div`
  display: ${({ isLoading }) => (isLoading && 'none !important') || 'block !important'};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const VideoPlayerAndInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const VideoPlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important;
  height: 100% !important;
  background-color: black;
`;

const VideoBottomInfos = styled.div`
  height: 130px;
  margin: 30px 40px 60px 40px;
  align-self: flex-start;
`;

const VideoBottomInfosTitle = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;

const VideoBottomInfosContent = styled.div``;

export default PlayerContainer;
