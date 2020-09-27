import React from 'react';
import styled from 'styled-components';
import Button from '../../../Button';
import {
  backgroundPrimaryColor,
  borderBoxColor,
  colorAccentColor,
  colorAccentHoverColor,
  textPrimaryColor,
} from '../../../../utils/color';

const LetterboxdBox = () =>{

  let preparedComponent =
    <LetterboxdBoxStyle>
      <LetterboxdBoxTextStyle>
        To enhance your experience on Kiwi, link  your letterboxd account.
      </LetterboxdBoxTextStyle>
      <Button
        maxWidth={true}
        width={null}
        height={"20px"}
        text="LINK"
        strokeColor={borderBoxColor}
        fillColor={"transparent"}
        fillColorHover={backgroundPrimaryColor}
        textColor={backgroundPrimaryColor}
        textColorHover={textPrimaryColor}
        Icon={null}
        iconColor={null}
      />
    </LetterboxdBoxStyle>

  return (preparedComponent);
};

const LetterboxdBoxTextStyle = styled.div`
  font-weight: 200;
  font-size: 13px;
`;

const LetterboxdBoxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--background-primary);
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 15px;
  height: 120px;
  width: 141px;
  border-radius: 4px;
  background: linear-gradient(69.34deg, #0087C1 0%, #81D2BB 100%);
  box-shadow: 0px 4px 20px 0px rgba(1, 1, 1, 0.1);
`;

export default LetterboxdBox;
