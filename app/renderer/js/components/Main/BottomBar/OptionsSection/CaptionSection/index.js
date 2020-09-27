import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { backgroundPrimaryColor, textPrimaryColor } from '../../../../../utils/color';
import IconMicro from '../../../../Icon/IconMicro';
import { useDispatch, useSelector } from 'react-redux';
import { changeOverlay } from '../../../../../store/overlayPage';

const ReactDOM = require('react-dom');

const CaptionSection = () =>{
  const dispatch = useDispatch();
  const [mouseOver, setMouseOver] = useState(0);
  const [move, setMove] = useState(false);
  const ref = useRef(null);

  const overlayType = useSelector(state => state.overlay.overlayType);

  const onClick = () => {
    dispatch(changeOverlay({overlayType:overlayType===""?"subs":"",id:0}));
  }

  useEffect(() => {
    const domNode = ReactDOM.findDOMNode(ref.current);
    let mainBarY = domNode.getBoundingClientRect().top;
    if (mainBarY-move.pageY > 20){
      setMouseOver(false);
    }
  }, [move]);

  const handleMove = (e) => {
    setMove(e);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const backgroundColor = overlayType==="subs" ? textPrimaryColor : backgroundPrimaryColor;
  const micColor = overlayType==="subs"  ? backgroundPrimaryColor : textPrimaryColor;

  let preparedComponent =
    <CaptionSectionContainerStyle
      onMouseEnter={(e) => {e.stopPropagation(); setMouseOver(true)}}
      onMouseLeave={(e) => {e.stopPropagation(); setMouseOver(false)}}
      mouseOver={mouseOver}
      ref={ref}>
      <CaptionSectionStyle onClick={onClick} color={backgroundColor}>
        <IconMicro color={micColor}/>
      </CaptionSectionStyle>
    </CaptionSectionContainerStyle>;

  return (preparedComponent)
};

const CaptionSectionContainerStyle = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 20px 0;
  width: 30px;
  height: 30px;
`;

const CaptionSectionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
`;

export default CaptionSection;
