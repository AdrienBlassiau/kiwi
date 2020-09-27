import React from 'react';
import styled from 'styled-components';

import IconFilm from '../../../Icon/IconFilm';
import IconGrid from '../../../Icon/IconGrid';
import IconTV from '../../../Icon/IconTV';
import IconBigHeart from '../../../Icon/IconBigHeart';
import IconList from '../../../Icon/IconList';
import MenuSubLine from './MenuSubLine/index.js';
import MenuLine from './MenuLine/index.js';

const Menu = () =>{

  let preparedComponent =
    <MenuStyle>
      <MenuLine text={"Movie"} Icon={IconFilm}/>
      <MenuLine text={"TV"} Icon={IconTV}/>
      <MenuLine text={"Discover"} Icon={IconGrid}/>
      <MenuLine text={"Favorite"} Icon={IconBigHeart}/>
      <MenuSubLine text={"Liked"}/>
      <MenuSubLine text={"Movies"}/>
      <MenuSubLine text={"TV Shows"}/>
      <MenuSubLine text={"People"}/>
      <MenuSubLine text={"Watchlist"}/>
      <MenuSubLine text={"Sees"}/>
      <MenuSubLine text={"List"}/>
      <MenuLine text={"Library"} Icon={IconList}/>
      <MenuSubLine text={"Load"}/>
      <MenuSubLine text={"Download"}/>
      <MenuSubLine text={"Saved"}/>
    </MenuStyle>;

  return (preparedComponent)
};


const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 50px;
`;

export default Menu;
