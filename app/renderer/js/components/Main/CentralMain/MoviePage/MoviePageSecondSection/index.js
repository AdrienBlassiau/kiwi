import React from 'react';

import styled from 'styled-components';
import PageSection from '../../../../PageSection';

const MoviePageSecondSection = () =>{

  let preparedComponent =
    <MoviePageSecondSectionStyle>
      <PageSection type={"people"} title={"Cast"}/>
      <PageSection type={"people"} title={"Crew"}/>
    </MoviePageSecondSectionStyle>;

  return (preparedComponent)
};

const MoviePageSecondSectionStyle = styled.div`
`;

export default MoviePageSecondSection;
