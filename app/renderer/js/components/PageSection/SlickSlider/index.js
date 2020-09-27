import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import Slider from 'react-slick';

const SlickSlider = (props) =>{

  const customeSlider = useRef(null);
  const [index, setIndex] = useState(0);
  let slides = props.slides;
  let slidesToShow = props.slidesToShow;
  let slidesToScroll = props.slidesToScroll;

  const beforeChange = (prev, next) => {
    setIndex(next);
  };

  const [sliderSettings, setSliderSettings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow:slidesToShow,
    slidesToScroll:slidesToScroll,
    arrows: false,
    beforeChange: beforeChange
  });

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  };

  let slider =
        <Slider {...sliderSettings} ref={customeSlider}>
          {slides.map((data,key) => {
            return (
              <SlideStyle key={key} firstIndex={index} currentIndex={key} slidesToShow={slidesToShow} >
                {data}
              </SlideStyle>);
          })}
        </Slider>;

  return [slider,gotoNext,gotoPrev,index];
};

const SlideStyle = styled.div`
  visibility: ${props => props.currentIndex === props.firstIndex + props.slidesToShow ? "hidden" : "show"};
`;

export default SlickSlider;
