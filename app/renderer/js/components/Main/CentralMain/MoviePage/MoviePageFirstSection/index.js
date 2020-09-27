import React, { useState } from 'react';

import styled from 'styled-components';
import RatingManager from '../../../../Card/RatingManager';
import { useDispatch } from 'react-redux';
import RatingBox from '../../../../Card/RatingBox';
import Button from '../../../../Button';
import {
  backgroundPrimaryColor,
  colorAccentColor,
  colorAccentHoverColor,
  textPrimaryColor,
} from '../../../../../utils/color';
import IconPlayMedium from '../../../../Icon/IconPlayMedium';
import IconPlayLittle from '../../../../Icon/IconPlayLittle';
import IconDownloadLittle from '../../../../Icon/IconDownloadLittle';
import MediaOptionsManager from '../../../../Card/MediaOptionsManager';

const MoviePageFirstSection = () =>{

  const [showRating, setShowRating] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const globalRating = 7.5;

  const moviePoster = "/home/adrien/Documents/.kiwi/images/poster.jpg";
  const movieCertif = "PG-13";
  const date = "04/09/2020"
  const country = "USA";
  const duration = "2h32min";
  const title = "I'm Thinking of Ending Things";
  const tagline = "Pour trois hommes, la guerre civile n'était pas un enfer. C'était de la pratique.";
  const overview = "Dans ce film adapté et réalisé par Charlie Kaufman, un détour inattendu transforme" +
    " une virée en voiture en un voyage terrifiant dans l'esprit fragile d'un couple.Dans ce film adapté et réalisé par Charlie Kaufman, un détour inattendu transforme" +
    " une virée en voiture en un voyage terrifiant dans l'esprit fragile d'un couple.Dans ce film adapté et réalisé par Charlie Kaufman, un détour inattendu transforme" +
    " une virée en voiture en un voyage terrifiant dans l'esprit fragile d'un couple.";
  const genresList = ["Drama","Science Fiction","Horror"];

  let preparedComponent =
    <MoviePageFirstSectionStyle>
      <MoviePageDataStyle>
        <MovieDataStyle>
          <MovieDataFirstRowStyle>
            <MovieCertifStyle>
              {movieCertif}
            </MovieCertifStyle>
            <MovieContentStyle withBorder={true} withSize={null}>
              {date}
            </MovieContentStyle>
            <MovieContentStyle withBorder={true} withSize={"45px"}>
              <RatingBox
                showRating={showRating}
                globalRating={globalRating}
              />
              <RatingManager
                globalRating={globalRating}
                setUserRating={setUserRating}
                userRating={userRating}
                setShowRating={setShowRating}
                showRating={showRating}
              />
            </MovieContentStyle>
            <MovieContentStyle withBorder={true} withSize={null}>
              {genresList.map((data,key) => {
                let comma = key > 0 ? ", " : "";
                return(<MovieGenreStyle key={key}>{comma}{data}</MovieGenreStyle>);
              })}
            </MovieContentStyle>
            <MovieContentStyle withBorder={true} withSize={null}>
              {country}
            </MovieContentStyle>
            <MovieContentStyle withBorder={false} withSize={null}>
              {duration}
            </MovieContentStyle>
          </MovieDataFirstRowStyle>
          <MovieDataSecondRowStyle>
            <MovieBigTitleStyle>{title}</MovieBigTitleStyle>
          </MovieDataSecondRowStyle>
          <MovieDataThirdRowStyle>
            <MovieTaglineStyle>{tagline}</MovieTaglineStyle>
          </MovieDataThirdRowStyle>
          <MovieDataFourthRowStyle>
            <MovieOverviewStyle>{overview}</MovieOverviewStyle>
          </MovieDataFourthRowStyle>
          <MovieDataFifthRowStyle>
            <MovieButtonsStyle>
              <MovieButtonContainerStyle>
                <Button
                  maxWidth={false}
                  width={"80px"}
                  height={"20px"}
                  text="Play"
                  strokeColor={colorAccentColor}
                  fillColor={colorAccentColor}
                  fillColorHover={colorAccentHoverColor}
                  textColor={backgroundPrimaryColor}
                  textColorHover={backgroundPrimaryColor}
                  Icon={IconPlayLittle}
                  iconColor={backgroundPrimaryColor}
                />
              </MovieButtonContainerStyle>
              <MovieButtonContainerStyle>
                <Button
                  maxWidth={false}
                  width={"100px"}
                  height={"20px"}
                  text="Download"
                  strokeColor={colorAccentColor}
                  fillColor={colorAccentColor}
                  fillColorHover={colorAccentHoverColor}
                  textColor={backgroundPrimaryColor}
                  textColorHover={backgroundPrimaryColor}
                  Icon={IconDownloadLittle}
                  iconColor={backgroundPrimaryColor}
                />
              </MovieButtonContainerStyle>
              <MovieButtonContainerStyle>
                <Button
                  maxWidth={false}
                  width={"150px"}
                  height={"20px"}
                  text="Watch Trailer"
                  strokeColor={textPrimaryColor}
                  fillColor={backgroundPrimaryColor}
                  fillColorHover={textPrimaryColor}
                  textColor={textPrimaryColor}
                  textColorHover={backgroundPrimaryColor}
                  Icon={null}
                  iconColor={null}
                />
              </MovieButtonContainerStyle>
            </MovieButtonsStyle>
            <MovieOptionsStyle>
              <MediaOptionsManager absolute={false}/>
            </MovieOptionsStyle>
          </MovieDataFifthRowStyle>
        </MovieDataStyle>
      </MoviePageDataStyle>
      <MoviePagePosterStyle>
        <MoviePagePosterImageStyle src={moviePoster}  alt={"logo"}/>
      </MoviePagePosterStyle>
    </MoviePageFirstSectionStyle>;

  return (preparedComponent)
};

const MovieOptionsStyle = styled.div`
`;

const MovieButtonsStyle = styled.div`
  display: flex;
`;

const MovieButtonContainerStyle = styled.div`
  margin-right: 10px;
  width: 100%;
  height: 100%;
`;

const MovieTaglineStyle = styled.div`
  color: var(--text-intermediate);
  font-size: 14px;
  font-style: italic;
`;

const MovieOverviewStyle = styled.div`
  font-size: 14px;
`;

const MovieBigTitleStyle = styled.div`
  font-size: 60px;
  font-weight: 700;
`;

const MovieDataFifthRowStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const MovieDataFourthRowStyle = styled.div`
  display: flex;
  margin: 10px 0;
`;

const MovieDataThirdRowStyle = styled.div`
  display: flex;
  margin: 10px 0;
`;
const MovieDataSecondRowStyle = styled.div`
  display: flex;
  margin: 10px 0;
`;

const MovieGenreStyle = styled.div`

`;

const MovieContentStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  border-right: 1px solid ${props => props.withBorder ? "var(--text-primary)" : "transparent"};
  height: 20px;
  width: ${props => props.withSize || "auto"};
`;


const MovieCertifStyle = styled.div`
  border: 1px solid var(--text-primary);
  padding: 2px 5px;
  margin-right: 10px;
`;

const MovieDataFirstRowStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const MovieDataStyle = styled.div`

`;

const MoviePageDataStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 30px;
`;

const MoviePagePosterImageStyle = styled.img`
  height: 100%;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.4);
`;

const MoviePagePosterStyle = styled.div`
  position: relative;
  height: 400px;
`;

const MoviePageFirstSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export default MoviePageFirstSection;
