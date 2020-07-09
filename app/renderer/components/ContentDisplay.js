import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import PercentageCircle from './PercentageCircle';
import { usePalette } from 'react-palette';
import { directSearch } from '../scrapper/index.js';
import run from '../scrapper/fetch.js';

const statusType = {
  FOUND: 'found',
  PENDING: 'pending',
  NOT_FOUND: 'not_found',
};

function hexToRgb(hex) {
  var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return res
    ? {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16),
      }
    : null;
}

const ContentDisplay = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(statusType.PENDING);
  const [results, setResults] = useState(null);

  const manageResult = (res) => {
    console.log('RES : ');
    console.log(res);
    if (res.length === 0) {
      console.log('NOT_FOUND');
      setStatus(statusType.NOT_FOUND);
      setResults(null);
    } else {
      console.log('FOUND');
      setStatus(statusType.FOUND);
      // console.log(res);
      props.setUrl(res)
      setResults(res);
    }
  };

  const runSearch = (title, date) => {
    if (!results) {
      directSearch(
        {
          title: title,
          is_movie: true,
          release_date: date,
        },
        0,
        0,
        manageResult,
      );
    }
  };

  const API = (movieId) => {
    return (
      ' https://api.themoviedb.org/3/movie/' +
      movieId +
      '?api_key=0ec464bc3151bee6274e541b3030fa57&append_to_response=release_dates,credits,images,translations'
    );
  };

  const getMovie = (movieId) => {
    setIsLoading(true);
    axios
      .get(API(movieId))
      .then((response) => {
        let data = response.data;
        setMovie(data);
        setIsLoading(false);
        const title = data.title;
        const year = data.release_date.split('-')[0];
        // run(props.driver)
        runSearch(title, year);
      })
      .catch((error) => setIsLoading(false));
  };

  useEffect(() => {
    getMovie(props.movieId);
  }, []);

  const genres = movie
    ? movie.genres.map((item, key) => {
        const white_space = key < movie.genres.length - 1 ? <span>,&nbsp;</span> : null;
        const content = (
          <span key={key} href="/genre/18-drame/movie">
            {item.name}
            {white_space}
          </span>
        );
        return content;
      })
    : null;

  const translation = movie
    ? movie.translations.translations.filter((data) => data.iso_3166_1 === 'FR')[0]
    : null;
  console.log(translation);
  const overview = translation ? translation.data.overview : '';
  const tagline = translation ? translation.data.tagline : '';

  const runtime = movie ? movie.runtime : null;
  var hours = Math.floor(runtime / 60);
  var minutes = runtime % 60;
  var minutes = minutes < 10 ? '0' + minutes : minutes;

  const realeaseDateContent = movie
    ? movie.release_dates.results.filter((data) => data.iso_3166_1 === 'US')[0]
    : null;

  const certif = realeaseDateContent ? realeaseDateContent.release_dates[0].certification : '';
  const realeaseDate = realeaseDateContent ? realeaseDateContent.release_dates[0].release_date : '';
  const country = realeaseDateContent ? realeaseDateContent.iso_3166_1 : '';

  const posterArray = movie
    ? movie.images.posters.filter((data) => data.iso_639_1 === 'fr')[0]
    : [];
  const posterFinalArray = movie ? (posterArray ? posterArray : movie.images.posters[0]) : [];
  const poster = posterFinalArray
    ? 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + posterFinalArray.file_path
    : '';
  console.log(poster);

  const backgroundImage = movie
    ? 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' + movie.backdrop_path
    : '';

  const { data, loading, error } = usePalette(poster);
  const mainColorPalette = data.vibrant;

  const color1 = hexToRgb(data.darkVibrant);
  const color2 = hexToRgb(data.darkMuted);

  const backgroundImageStyle =
    movie && color1
      ? {
          backgroundImage: "url('" + backgroundImage + "')",
          borderBottom: '1px solid ' + data.darkVibrant,
        }
      : {};

  const backgroundImageColor =
    color1 && color2
      ? {
          backgroundImage:
            'linear-gradient(to right, rgba(' +
            color1.r +
            ', ' +
            color1.g +
            ', ' +
            color1.b +
            ', 1.00) 150px, rgba(' +
            color2.r +
            ', ' +
            color2.g +
            ', ' +
            color2.b +
            ', 0.84) 100%)',
        }
      : {};

  const credits = movie
    ? movie.credits.crew.map((item, key) => {
        const content =
          key < movie.credits.crew.length - 1 && key < 6 ? (
            <div key={key} className="profile">
              <div className="profile-name">
                <div>{item.name}</div>
              </div>
              <div className="character">{item.job}</div>
            </div>
          ) : null;
        return content;
      })
    : null;

  const isOk = movie && credits && backgroundImageColor && poster && backgroundImage;

  const year = movie ? movie.release_date.split('-')[0] : '';

  let findMovie = null;
  let circleStatusClass = null;
  console.log('STATUS :');
  console.log(status);
  console.log('OK');
  if (status) {
    if (status === statusType.NOT_FOUND) {
      findMovie = 'NOT_FOUND';
      circleStatusClass = "circle-status-nok"
    } else if (status === statusType.FOUND && results) {
      findMovie = 'FOUND ! : ' + results[0].movieUrl;
      circleStatusClass = "circle-status-ok"
    } else {
      findMovie = 'LOADING ...';
      circleStatusClass = "circle-status-pending"
    }
  }

  const playButton = status === statusType.FOUND ?
  <div className="circle-around-play" onClick={() => {console.log("okoko");props.setIsPlaying(true)}}>
    <div className="button-play"></div>
  </div>:
  <div className="circle-around-dont-play">
    <div className="button-play"></div>
  </div>;


  const contentDispay = isOk ? (
    <div style={backgroundImageStyle} className="main-content-display-container">
      <div style={backgroundImageColor} className="main-content-display-back">
        <div className="main-content-single-column">
          <section className="main-content-data-container">
            <div className="poster-wrapper">
              <div className="poster-more-display">
                <div className="main-content-poster">
                  <img className="main-content-poster-content" src={poster} alt={movie.title}></img>
                </div>
              </div>
            </div>
            <div className="data-wrapper-container">
              <section className="data-wrapper">
                <div className="data-wrapper-title">
                  <div className="data-wrapper-title-text">
                    <span className="data-wrapper-title-text-content">{movie.title}</span>{' '}
                    <span className="data-wrapper-title-text-date">({year})</span>
                  </div>
                  <div className="data-wrapper-title-facts">
                    {certif !== '' ? (
                      <span className="data-wrapper-title-facts-certif">{certif}</span>
                    ) : (
                      <span></span>
                    )}
                    <span className="data-wrapper-title-facts-relea">
                      {movie.release_date} ({country})
                    </span>
                    <span className="data-wrapper-title-facts-genre">{genres}</span>
                    <span className="data-wrapper-title-facts-runtime">
                      {hours}h{minutes}m
                    </span>
                    <span className="data-wrapper-title-facts-status">
                      <div className="circle-status-container">
                        <div className={"circle-status "+circleStatusClass}>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="data-wrapper-infos-play">
                  <div className="data-wrapper-infos">
                    <div className="chart-block">
                      <PercentageCircle
                        percentage={movie.vote_average}
                        width={50}
                        height={50}
                        border={4}
                        fontSize1={25}
                        fontSize2={10}
                      />
                    </div>
                    <div className="chart-text">
                      User <br />
                      Score
                    </div>
                  </div>
                  <div>
                    {playButton}
                  </div>
                </div>
                <div className="data-wrapper-resume">
                  <div className="tag-line-master">{tagline}</div>
                  <div className="overview-text">Overview</div>
                  <div className="overview-section-text">
                    <div>{overview}</div>
                  </div>
                  <div className="people-no-image">{credits}</div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );

  return <div>{contentDispay}</div>;
};

export default ContentDisplay;
