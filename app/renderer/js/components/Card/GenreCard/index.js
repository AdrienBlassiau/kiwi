import React, { useState } from 'react';
import styled from 'styled-components';

const GenreCard = (props) =>{

  const genre = props.genre;
  const cardPoster = "/home/adrien/Documents/.kiwi/images/genre/movie/"+genre+"/poster.jpg";

  let preparedComponent =
    <GenreCardStyle>
      <CardBackgroundStyle src={cardPoster}  alt={"logo"}/>
      <GenreCardTextStyle>
        {genre}
      </GenreCardTextStyle>
    </GenreCardStyle>;

  return (preparedComponent)
};

const CardBackgroundStyle = styled.img`
  position: absolute;
  width: 100%;
  opacity: 0.3;
`;

const GenreCardTextStyle = styled.div`
  color: var(--background-primary);
  font-size: 18px;
  z-index: 100;
`;

const GenreCardStyle = styled.div`
  position: relative;
  background-color: var(--color-accent);
  display: flex;
  width: 190px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default GenreCard;
