import React, { useState } from 'react';
import styled from 'styled-components';
import IconRating from '../../Icon/IconRating';
import IconDeleteRating from '../../Icon/IconDeleteRating';

const RatingManager = (props) =>{
  let globalRating= props.globalRating;
  let setUserRating = props.setUserRating;
  let userRating = props.userRating;
  let setShowRating = props.setShowRating;
  let showRating = props.showRating;

  const [currentRating, setCurrentRating] = useState(0);

  let preparedComponent =
      <RatingManagerStyle
        onMouseEnter={() => {setShowRating(true)}}
        onMouseLeave={() =>  {setShowRating(false)}}>
        {showRating && userRating ?
          <DeleteRatingStyle
            onClick={(e)=>{setUserRating(0);setCurrentRating(0);setShowRating(false);e.stopPropagation()}}
          >
            <IconDeleteRating
              color={"var(--text-intermediate)"}
            />
          </DeleteRatingStyle>
          :null}
        <GlobalRatingStyle currentRating={currentRating} userRating={userRating} showRating={showRating}>
          {showRating ? (currentRating||globalRating) : (userRating || globalRating) }
        </GlobalRatingStyle>
        <IconRating
          color1={((showRating && currentRating)||userRating) ? "var(--color-accent)" : "var(--text-primary)"}
          color2={"var(--text-primary-opacity)"}
          globalRating={globalRating}
          setUserRating={setUserRating}
          userRating={userRating}
          setCurrentRating={setCurrentRating}
          currentRating={currentRating}
          setShowRating={setShowRating}
          showRating={showRating}/>
      </RatingManagerStyle>;

  return (preparedComponent)
};

const DeleteRatingStyle = styled.div`
  cursor: pointer;
  margin-right: 5px;
`;

const GlobalRatingStyle = styled.div`
  margin-right: 5px;
  color: ${props => ((props.showRating && props.currentRating)||props.userRating) ? "var(--color-accent)" : "var(--text-primary)"};
  font-size: 10px;
`;

const RatingManagerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 0;
  align-items: center;
`;


export default RatingManager;
