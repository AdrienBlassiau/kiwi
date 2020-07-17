import React, { useState, useEffect } from 'react';
import { directSearchSite, totalScrapper } from '../scrapper/index.js';
import { safeQuit } from '../scrapper/driver';

const handler = (cache, currentMovieBasics, queue) => {
  const { callQueue, occupied, setCallQueue, setOccupied } = queue;
  const [driverStack, setDriverStack] = useState([])
  const [results, setResults] = useState(null);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    console.log(cache.cacheData);
    if(results){
    	let id = currentId;
    	if (cache.cacheData[id].nbSolved == totalScrapper){
    		console.log(">>>>>>>>>>>>>>>> TOUT EST SOLVED DANS "+id+"!!!!!!!!!!!")
    		console.log(driverStack)
    		cache.setCacheData((prevState) => ({
	        	...prevState,
	        	[id]: { ...cache.cacheData[id], finished:true},
	    	}));

    		driverStack.forEach(item=>safeQuit(item))
    		setDriverStack([])
    		setResults(null)
    		setCurrentId(null)
    		setOccupied(null)
    		callQueue.shift()
    		setCallQueue(callQueue)
    	}
    	else{
    		console.log(">>>>>>>>>>>>>>>> TOUT N'EST PAS SOLVED DANS "+id+" RESTE "+(totalScrapper-cache.cacheData[id].nbSolved)+" !!!!!!!!!!!")
    	}
    }
  }, [cache]);

  useEffect(() => {
  	if(results){
  		const newData = results[0]
  		const id = results[1]

	  	const newStreamData = { ...cache.cacheData[id].streamData, ...newData };
	    cache.setCacheData((prevState) => ({
	        ...prevState,
	        [id]: { ...cache.cacheData[id], streamData:newStreamData,nbSolved:cache.cacheData[id].nbSolved+1 },
	    }));
    }
  }, [results]);

  const handleSearch = (id, title, date) => {
    const callback = (res) => {
      const content = res[0];
      const driver = res[1];
      driverStack.push(driver)
      setDriverStack(driverStack)

      const data = content.data;
      const type = content.type+(Math.random());

      // console.log("FIN D'UNE SEARCH:", data);
      // console.log('ETAT DU CACHE', cache);
      // console.log("L'id courante est :", id);
      if (data.resolve.length === 0) {
        setResults([{ [type]: null },id]);
      } else {
        setResults([{ [type]: data },id]);
      }
    };

    directSearchSite(
      {
        title: title,
        is_movie: true,
        release_date: date,
      },
      0,
      0,
      callback,
      cache.cacheData[id],
    );
  };

  useEffect(() => {
    console.log('La callQueue a changé !', queue.callQueue);

    if (!occupied && callQueue.length > 0) {

      let currentData = callQueue[0]
      console.log("CURRENT DATA:",currentData)
      setOccupied(currentData)

      let id = currentData.id;
      let title = currentData.title;
      let date = currentData.date;

      setCurrentId(id)

      if (!cache.cacheData[id]) {
      	console.log("Pas dans le cache 1")
      	cache.cacheData[id] = {}
      	cache.cacheData[id].finished = false
      	cache.cacheData[id].nbSolved = 0
      	cache.cacheData[id].streamData = {}
      	setDriverStack(driverStack)
        handleSearch(id, title, date);
      }
      // else if(cache.cacheData[id] && !cache.cacheData.finished){
      // 	console.log("Pas dans le cache 2")
      // 	handleSearch(id, title, date);
      // }
      else{
      	console.log("Dans le cache")
      	driverStack.forEach(item=>safeQuit(item))
    	setDriverStack([])
    	setResults(null)
    	setCurrentId(null)
    	setOccupied(null)
    	callQueue.shift()
    	setCallQueue(callQueue)
      }
    }
  }, [queue]);

};



module.exports = {
  handler,
};
