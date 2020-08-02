import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import VideoLoader from './VideoLoader';
import VideoPlayer from './VideoPlayer';

const PlayerContainer = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const { cacheData, setCacheData } = props.cache;
  const currentMovieData = props.currentMovieData;
  const overview = props.currentMovieData.overview;

  const [isLoading, setIsLoading] = useState(true);
  const [urlList, setUrlList] = useState([]);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

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

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////  COMPONENTS  ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const urlShow = urlList.map((item, key) => {
    return (
      <div key={key}>
        {item.type} {item.language} {item.quality}
      </div>
    );
  });

  // console.log("urlList",urlList)

  const videoPlayer =
    urlList.length === 0 ? (
      <VideoLoader message={'Scraping ...'} />
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
  //     movieUrl="http://streamtape.com/get_video?id=q8OyRKjG13Tz2PM&expires=1596361632&ip=FOSOD0xEDOONFt&token=VOMP5YL44KvO"
  //     setIsLoading={setIsLoading}
  //     isLoading={isLoading}
  //     serverList={[
  //       {
  //         id: 547016,
  //         language: 'V.0.',
  //         quality: 'hd',
  //         type: 'classic',
  //         url:
  //           'http://streamtape.com/get_video?id=q8OyRKjG13Tz2PM&expires=1596361632&ip=FOSOD0xEDOONFt&token=VOMP5YL44KvO',
  //       },
  //     ]}
  //   />
  // );

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

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
  background-color: var(--main-color-1);
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

const VideoBottomInfosContent = styled.div`
  z-index: 1;
`;

export default PlayerContainer;
