import React from 'react';
import styled, { css } from 'styled-components';

import { usePalette } from 'react-palette';

const statusType = {
  FOUND: 'found',
  PENDING: 'pending',
  NOT_FOUND: 'not_found',
};

const hexToRgb = (hex) => {
  var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return res
    ? {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16),
      }
    : null;
};

const getGenre = (movie) => {
  return movie.genres.map((item, key) => {
    const white_space = key < movie.genres.length - 1 ? <span>,&nbsp;</span> : null;
    const content = (
      <span key={key}>
        {item.name}
        {white_space}
      </span>
    );
    return content;
  });
};

const getTranslation = (movie, lang) => {
  const content = movie.translations.translations.filter((data) => data.iso_3166_1 === lang)[0];
  return [content.data.overview, content.data.tagline];
};

const getRuntime = (movie) => {
  const runtime = movie.runtime;
  var hours = Math.floor(runtime / 60);
  var minutes = runtime % 60;
  var minutes = minutes < 10 ? '0' + minutes : minutes;
  return [hours, minutes];
};

const getYear = (movie) => {
  return movie.release_date.split('-')[0];
};

const getReleaseData = (movie, coun) => {
  const realeaseDateContent = movie.release_dates.results.filter(
    (data) => data.iso_3166_1 === coun,
  )[0];

  const certif = realeaseDateContent ? realeaseDateContent.release_dates[0].certification : '';
  const realeaseDate = realeaseDateContent ? realeaseDateContent.release_dates[0].release_date : '';
  const country = realeaseDateContent ? realeaseDateContent.iso_3166_1 : '';

  return [certif, realeaseDate, country];
};

const getPoster = (movie, lang) => {
  const posterArray = movie.images.posters.filter((data) => data.iso_639_1 === lang)[0];
  const posterFinalArray = posterArray ? posterArray : movie.images.posters[0];
  const poster = posterFinalArray
    ? 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + posterFinalArray.file_path
    : '';
  return poster;
};

const getBackgroundImage = (movie) => {
  const backgroundImage =
    'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' + movie.backdrop_path;
  return backgroundImage;
};

const getColors = (movie, poster) => {
  const { data, loading, error } = usePalette(poster);
  const color1 = hexToRgb(data.darkVibrant);
  const color2 = hexToRgb(data.darkMuted);

  return [color1, color2, data];
};

const getCredits = (movie) => {
  const credits = movie.credits.crew.map((item, key) => {
    const content =
      key < movie.credits.crew.length - 1 && key < 6 ? (
        <Profile key={key}>
          <ProfileName>
            <div>{item.name}</div>
          </ProfileName>
          <Character>{item.job}</Character>
        </Profile>
      ) : null;
    return content;
  });
  return credits;
};

const getBackgroundData = (color1, color2, backgroundImage, data) => {
  const backgroundImageStyle = {
    backgroundImage: "url('" + backgroundImage + "')",
    borderBottom: '1px solid ' + data.darkVibrant,
  };

  const backgroundImageColor = {
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
  };
  return [backgroundImageStyle, backgroundImageColor];
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// export default getMovies

module.exports = {
  hexToRgb,
  statusType,
  getGenre,
  getTranslation,
  getRuntime,
  getYear,
  getReleaseData,
  getPoster,
  getBackgroundImage,
  getColors,
  getCredits,
  getBackgroundData,
};

const Profile = styled.div`
  background-color: transparent;
  height: auto;
  margin-bottom: 0;
  margin-top: 10px;
  width: 33%;
  flex-basis: 33%;
  text-align: left;
  margin-right: 0;
  box-sizing: border-box;
  padding-right: 20px;
  min-width: 140px;
  box-sizing: border-box;
  list-style-type: none;
  list-style-position: inside;
`;

const ProfileName = styled.div`
  font-weight: bold;
  font-size: 1em;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Character = styled.div`
  padding: 0;
  font-size: 0.9em;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;
