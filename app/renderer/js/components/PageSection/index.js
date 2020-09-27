import React, { useEffect } from 'react';

import styled from 'styled-components';
import IconChevronSeeMore from '../Icon/IconChevronSeeMore';
import IconChevronSeeBefore from '../Icon/IconChevronSeeBefore';
import IconChevronSeeAfter from '../Icon/IconChevronSeeAfter';
import SlickSlider from './SlickSlider';
import MovieCard from '../Card/Moviecard/index.js';
import GenreCard from '../Card/GenreCard/index.js';
import PeopleCard from '../Card/PeopleCard/index.js';

const PageSection = (props) =>{
  let type = props.type;

  let data;
  let card;
  switch(type) {
    case "movie":
      data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      card = (data,key) => <MovieCard key={key} movie={data}/>
      break;
    case "genre":
      data = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy",
        "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"];
      card = (data,key) => <GenreCard key={key} genre={data}/>
      break;
    case "year":
      data = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy",
        "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"];
      card = (data,key) => <GenreCard key={key} genre={data}/>
      break;
    case "people":
      data = [{name:"Mark Hamill",role:"Luke Skywalker / Dobbu Scay (voice)",type:"cast",number:1},
        {name:"Carrie Fisher",role:"General Leia Organa",type:"cast",number:2},
        {name:"Adam Driver",role:"Kylo Ren / Ben Solo",type:"cast",number:3},
        {name:"Daisy Ridley",role:"Rey",type:"cast",number:4},
        {name:"Rian Johnson",role:"Director, Screenplay",type:"crew",number:1},
        {name:"John Williams",role:"Original Music Composer ",type:"crew",number:2},
        {name:"J.J. Abrams",role:"Executive Producer",type:"crew",number:3},
        {name:"Bob Ducsay",role:"Editor",type:"crew",number:4}];
      card = (data,key) => <PeopleCard key={key} people={data} number={key}/>
      break;
    default:
      data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      card = (data,key) => <MovieCard key={key} movie={data}/>
      break;
  }

  let slides = data.map((data,key) => card(data,key));

  let slidesToShow = 4
  let slidesToScroll = 4;
  let sliderProps = { slides, slidesToShow, slidesToScroll};
  let [slider,gotoNext,gotoPrev,index] = SlickSlider(sliderProps);

  let title = props.title;
  let preparedComponent =
    <PageSectionStyle>
      <PageSectionTitleStyle>
        <PageSectionTitleContainerStyle>
          <PageSectionTitleTextStyle>
            {title}
          </PageSectionTitleTextStyle>
          <IconChevronSeeMore
            color={"var(--text-primary)"}
          />
        </PageSectionTitleContainerStyle>
        <PageSectionMovingStyle>
          <IconSlideButton onClick={()=>gotoPrev()}>
            <IconChevronSeeBefore
              color={index === 0 ? "var(--text-primary-opacity)" : "var(--text-primary)"}
              opacity={1}
            />
          </IconSlideButton>
          <IconSlideButton onClick={()=>gotoNext()}>
            <IconChevronSeeAfter
              color={index+slidesToShow>=slides.length ? "var(--text-primary-opacity)" : "var(--text-primary)"}
              opacity={1}
            />
          </IconSlideButton>
        </PageSectionMovingStyle>
      </PageSectionTitleStyle>
      <PageSectionContentStyle>
        {slider}
      </PageSectionContentStyle>
    </PageSectionStyle>;

    return (preparedComponent);
};

const PageSectionContentStyle = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 10px;
`;

const IconSlideButton = styled.div`
  cursor: pointer;
`;

const PageSectionTitleTextStyle = styled.div`
  font-size: 18px;
  color: var(--text-primary);
  font-weight: 600;
`;

const PageSectionTitleContainerStyle = styled.div`
  display: flex;
  align-items:center;
  line-height: 0;
`;

const PageSectionMovingStyle = styled.div`
  display: flex;
`;

const PageSectionTitleStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PageSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

export default PageSection;
