import React, { useState, useEffect } from 'react';
import { directSearchSite, totalScrapper } from '../scrapper/index.js';
import { safeQuit } from '../scrapper/driver';
import logger from '../utils/logger.js';

const handler = (cache, currentMovieId, queue, gridInfos) => {
  const { callQueue, solvedQueue, occupied, setCallQueue, setSolvedQueue, setOccupied } = queue;
  const [driverStack, setDriverStack] = useState([]);
  const [results, setResults] = useState(null);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    console.log(cache.cacheData);
    if (results) {
      let id = currentId;
      if (cache.cacheData[id].nbSolved == totalScrapper) {
        console.log('>>>>>>>>>>>>>>>> TOUT EST SOLVED DANS ' + id + '!!!!!!!!!!!');
        console.log(driverStack);
        cache.setCacheData((prevState) => ({
          ...prevState,
          [id]: { ...cache.cacheData[id], finished: true },
        }));

        driverStack.forEach((item) => safeQuit(item));
        setDriverStack([]);
        setResults(null);
        setCurrentId(null);
        setOccupied(null);

        let shifted = callQueue.shift();
        setCallQueue(callQueue);

        let newSolvedQueue = solvedQueue.concat([shifted]);
        setSolvedQueue(newSolvedQueue);
      } else {
        console.log(
          ">>>>>>>>>>>>>>>> TOUT N'EST PAS SOLVED DANS " +
            id +
            ' RESTE ' +
            (totalScrapper - cache.cacheData[id].nbSolved) +
            ' !!!!!!!!!!!',
        );
      }
    }
  }, [cache]);

  useEffect(() => {
    if (results) {
      const newData = results[0];
      const id = results[1];

      const newStreamData = { ...cache.cacheData[id].streamData, ...newData };
      cache.setCacheData((prevState) => ({
        ...prevState,
        [id]: {
          ...cache.cacheData[id],
          streamData: newStreamData,
          nbSolved: cache.cacheData[id].nbSolved + 1,
        },
      }));
    }
  }, [results]);

  const handleSearch = (id, title, date, imdb_id) => {
    const callback = (res) => {
      const content = res[0];
      const driver = res[1];
      driverStack.push(driver);
      setDriverStack(driverStack);

      const data = content.data;
      const type = content.type + Math.random();

      if (data.resolve.length === 0) {
        setResults([{ [type]: null }, id]);
      } else {
        setResults([{ [type]: data }, id]);
      }
    };

    directSearchSite(
      {
        title: title,
        is_movie: true,
        release_date: date,
        tmdb_id: id,
        imdb_id: imdb_id,
      },
      0,
      0,
      callback,
      cache.cacheData[id],
    );
  };

  useEffect(() => {
    if (!occupied && callQueue.length > 0) {
      logger.debug('(handleStreamSearch) queue has changed');
      // logger.debug(JSON.stringify(queue));
      console.log('callQueue:', callQueue);

      let currentData = callQueue[0];

      setOccupied(currentData);

      let type = gridInfos.type;
      let id = currentData.id;
      let imdb_id = currentData.imdb_id;
      let title = currentData.title;
      const date =
        type === 'movie'
          ? currentData.hasOwnProperty('release_date')
            ? currentData.release_date.split('-')[0]
            : ''
          : currentData.first_air_date.split('-')[0];

      setCurrentId(id);

      if (!cache.cacheData[id]) {
        console.log('[' + id + '] pas dans le cache');
        cache.cacheData[id] = {};
        cache.cacheData[id].finished = false;
        cache.cacheData[id].nbSolved = 0;
        cache.cacheData[id].streamData = {};
        setDriverStack(driverStack);
        handleSearch(id, title, date, imdb_id);
      }
      // else if(cache.cacheData[id] && !cache.cacheData.finished){
      // 	console.log("Pas dans le cache 2")
      // 	handleSearch(id, title, date);
      // }
      else {
        console.log('[' + id + '] dans le cache');
        driverStack.forEach((item) => safeQuit(item));
        setDriverStack([]);
        setResults(null);
        setCurrentId(null);
        setOccupied(null);
        callQueue.shift();
        setCallQueue(callQueue);
      }
    }
  }, [queue]);
};

module.exports = {
  handler,
};
