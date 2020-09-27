import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import SeeMoreListManager from './SeeMoreListManager/index.js';

const SeeMoreBox = (props) =>{
  const seeMore = props.seeMore;

  const cardPoster = "/home/adrien/Documents/.kiwi/images/poster.jpg";

  let preparedComponent =
    <SeeMoreBoxAbsoluteStyle >
      <SeeMoreBoxStyle>
        <SeeMoreMovieSectionStyle>
          <SeeMoreMoviePosterStyle>
            <CardBackgroundStyle src={cardPoster}  alt={"logo"}/>
          </SeeMoreMoviePosterStyle>
          <SeeMoreMovieDataStyle>
            <SeeMoreMovieTitleStyle>
                I'm Thinking of ending things
            </SeeMoreMovieTitleStyle>
            <SeeMoreMovieDateStyle>
              2020
            </SeeMoreMovieDateStyle>
          </SeeMoreMovieDataStyle>
        </SeeMoreMovieSectionStyle>
        <SeeMoreListSectionStyle>
          <SeeMoreListManager />
        </SeeMoreListSectionStyle>
      </SeeMoreBoxStyle>
    </SeeMoreBoxAbsoluteStyle>;

  return (seeMore ? preparedComponent : null)
};

const CardBackgroundStyle = styled.img`
  height: 64px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.4);
`;

const SeeMoreListSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 10px;
`;

const SeeMoreMovieDateStyle = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-intermediate);
  font-size: 12px;
`;

const SeeMoreMovieTitleStyle = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 140px;
`;

const SeeMoreMoviePosterStyle = styled.div`
`;

const SeeMoreMovieSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--divider-secondary);
`;

const SeeMoreMovieDataStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 10px;
`;

const SeeMoreBoxStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-primary);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 10px;

  &:after {
    content: '';
    position: absolute;
    top: -10px;
    right: 20px;
    margin-left: -10px;
    width: 0;
    height: 0;
    border-bottom: solid 10px var(--background-primary);
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
  }
`;

const SeeMoreBoxAbsoluteStyle = styled.div`
  position: absolute;
  top: 50px;
  left: -165px;
  z-index: 2000;
`;


export default SeeMoreBox;
