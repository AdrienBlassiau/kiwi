import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import { usePalette } from 'react-palette';
import { directSearch } from '../scrapper/index.js';
import findUrl from '../scrapper/fetch.js';
import ReactPlayer from 'react-player'

const PlayerContainer = (props) => {

  const [movieUrl, setMovieUrl] = useState(null)

  useEffect(() => {
    let url = props.url[0].movieUrl
    findUrl(5,url,props.driver,setMovieUrl);
    console.log("END")
  }, []);

  console.log("MOVIE URL",movieUrl ? movieUrl[0].url : "NOT ok")

  const videoPlayer = movieUrl ?
    <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url={movieUrl[0].url}
            width='100%'
            height='100%'
            controls = {true}
            volume = {1}
            />
  </div>:<div onClick={() => props.setIsPlaying(false)}>Playing : {props.url[0].movieUrl}</div> ;



  return (videoPlayer);
};

export default PlayerContainer;
