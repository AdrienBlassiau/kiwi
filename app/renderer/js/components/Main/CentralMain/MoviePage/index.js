import React from 'react';

import styled from 'styled-components';
import PageTitle from '../MainTitle';
import MoviePageFirstSection from './MoviePageFirstSection';
import MoviePageSecondSection from './MoviePageSecondSection';
import { useDispatch } from 'react-redux';
import { changePage } from '../../../../store/mainPage';

const MoviePage = () =>{

  const dispatch = useDispatch();

  const backFun = () => {
    dispatch(changePage({mainType:"movieMain",id:0}));
  }


  let preparedComponent =
    <MoviePageStyle>
      <PageTitle title={"Movie"} backFun={backFun}/>
      <MoviePageFirstSection />
      <MoviePageSecondSection />
    </MoviePageStyle>;

  return (preparedComponent)
};

const MoviePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding:40px;
`;

export default MoviePage;
