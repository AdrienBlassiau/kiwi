import React, { useState } from 'react';
import styled from 'styled-components';

const PeopleCard = (props) =>{

  const people = props.people;
  const number = props.number;
  const peopleImage = "/home/adrien/Documents/.kiwi/images/people/"+people.type+people.number+".jpg";

  let preparedComponent =
    <PeopleCardStyle>
      <CardPeopleImageContainerStyle>
        <CardPeopleImageStyle src={peopleImage}  alt={"people"}/>
      </CardPeopleImageContainerStyle>
      <CardPeopleDataStyle>
        <GenreCardNameStyle>
          {people.name}
        </GenreCardNameStyle>
        <GenreCardRoleStyle>
          {people.role}
        </GenreCardRoleStyle>
      </CardPeopleDataStyle>
    </PeopleCardStyle>;

  return (preparedComponent)
};

const GenreCardNameStyle = styled.div`
  color: var(--text-primary);
  font-size: 16px;
`;

const GenreCardRoleStyle = styled.div`
  color: var(--text-intermediate);
  font-size: 14px;
`;

const CardPeopleDataStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 140px;
  margin-left: 10px;
  height: 100%;
`;

const CardPeopleImageContainerStyle = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

const CardPeopleImageStyle = styled.img`
  max-width: 100%;
`;

const PeopleCardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  height: 100px;
`;


export default PeopleCard;
