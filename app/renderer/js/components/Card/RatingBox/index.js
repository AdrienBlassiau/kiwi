import React, { useState } from 'react';
import styled from 'styled-components';

const RatingBox = (props) =>{

  let globalRating = props.globalRating;
  let showRating = props.showRating;

  let preparedComponent =
    <RatingBoxStyle>
      <RatingBoxContainerStyle>
        <RatingBoxLineStyle>
          <RatingBoxLineTextStyle>
            Global
          </RatingBoxLineTextStyle>
          <RatingBoxLineRatingStyle>
            {globalRating}
          </RatingBoxLineRatingStyle>
        </RatingBoxLineStyle>
      </RatingBoxContainerStyle>
    </RatingBoxStyle>;

  return (showRating ? preparedComponent : null)
};


const RatingBoxLineTextStyle = styled.div`
  color: var(--text-intermediate);
  font-size: 8px;
  padding-right: 10px;
`;

const RatingBoxLineRatingStyle = styled.div`
  font-size: 10px;
  padding-left: 10px;
`;

const RatingBoxLineStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RatingBoxContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const RatingBoxStyle = styled.div`
  position: absolute;
  bottom: 25px;
  right: 0;
  background-color: var(--background-primary);
  padding: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
`;


export default RatingBox;
