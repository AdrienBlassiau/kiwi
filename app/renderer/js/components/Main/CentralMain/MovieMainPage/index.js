import React from 'react';

import styled from 'styled-components';
import PageTitle from '../MainTitle';
import PageSection from '../../../PageSection';

const MovieMainPage = () =>{
  let preparedComponent =
    <MovieMainPageStyle>
      <PageTitle title={"Movie"} backFun={null}/>
      <PageSection type={"movie"} title={"What's Popular"}/>
      <PageSection type={"movie"} title={"What's Trending"}/>
      <PageSection type={"movie"} title={"What's Top Rated"}/>
      <PageSection type={"genre"} title={"Genre"}/>
      <PageSection type={"year"} title={"Year"}/>
    </MovieMainPageStyle>;

  return (preparedComponent)
};

const MovieMainPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export default MovieMainPage;
