import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeOverlay } from '../../../../store/overlayPage';

const LinksSection = () =>{
  const dispatch = useDispatch();
  const cardPoster = "/home/adrien/Documents/.kiwi/images/poster.jpg";

  const handleOpenSubtitleOverlay = () => {
    dispatch(changeOverlay({overlayType:"links",id:0}));
  }

  let preparedComponent =
    <LinksSectionContainerStyle onClick={handleOpenSubtitleOverlay}>
      <LinksSectionStyle>
        <LinksSectionImageStyle>
          <CardBackgroundStyle src={cardPoster}  alt={"logo"}/>
        </LinksSectionImageStyle>
        <LinksSectionTextContainerStyle>
          <LinksSectionTextStyle>
            Links and subtitles
          </LinksSectionTextStyle>
        </LinksSectionTextContainerStyle>
      </LinksSectionStyle>
    </LinksSectionContainerStyle>;

  return (preparedComponent)
};

const CardBackgroundStyle = styled.img`
  height: 52px;
  border-radius: 4px;
`;

const LinksSectionTextStyle = styled.div`
  line-height: 0;
`;

const LinksSectionTextContainerStyle = styled.div`
  width: max-content;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const LinksSectionImageStyle = styled.div`
`;

const LinksSectionStyle = styled.div`
  display:flex;
  aligns-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  &:hover{
    background-color: var(--background-contrast);
  }
`;

const LinksSectionContainerStyle = styled.div`
  border-left: 1px solid var(--divider-primary);
  padding: 0 20px;
  cursor: pointer;
`;

export default LinksSection;
