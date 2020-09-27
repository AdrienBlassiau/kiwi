import React, { useState } from 'react';
import styled from 'styled-components';
import DropDown from '../../DropDown';

const TopCard = (props) =>{

  let showRank = props.showRank;
  let showLastSeen = props.showLastSeen;
  showRank = false;
  showLastSeen = false;
  let preparedComponent =
    <TopCardStyle>
      <TopCardMediaDataStyle>
        <DropDown
          dropdownTitle={"movie"}
          miniDropdown={true}
          selectedContent={null}
          dropdownContent={null}
        />
        <DropDown
          dropdownTitle={"S"}
          miniDropdown={true}
          selectedContent={"1"}
          dropdownContent={[1,2,3,4,5]}
        />
        <DropDown
          dropdownTitle={"E"}
          miniDropdown={true}
          selectedContent={"1"}
          dropdownContent={[1,2,3,4,5]}
        />
      </TopCardMediaDataStyle>
      <TopCardMediaInfosStyle>
        { showRank ?
        <DropDown
          dropdownTitle={"#1"}
          miniDropdown={true}
          selectedContent={null}
          dropdownContent={null}
        /> : null}
        { showLastSeen ?
        <DropDown
          dropdownTitle={"21 hours ago"}
          miniDropdown={true}
          selectedContent={null}
          dropdownContent={null}
        /> : null}
      </TopCardMediaInfosStyle>
    </TopCardStyle>;

  return (preparedComponent)
};


const TopCardMediaDataStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopCardMediaInfosStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopCardMediaTypeStyle = styled.div`
  background-color: var(--title-background);
  padding: 2px 4px;
  margin-right: 2px;
  border-radius: 2px;
`;

const TopCardSeasonStyle = styled.div`
  background-color: var(--title-background);
  padding: 2px 4px;
  margin-right: 2px;
  border-radius: 2px;
`;

const TopCardEpisodeStyle = styled.div`
  background-color: var(--title-background);
  padding: 2px 4px;
  margin-right: 2px;
  border-radius: 2px;
`;

const TopCardRankStyle = styled.div`
  background-color: var(--title-background);
  padding: 2px 4px;
  margin-left: 2px;
  border-radius: 2px;
`;

const TopCardLastViewedStyle = styled.div`
  background-color: var(--title-background);
  padding: 2px 4px;
  margin-left: 2px;
  border-radius: 2px;
`;


const TopCardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  margin-bottom: 5px;
`;


export default TopCard;
