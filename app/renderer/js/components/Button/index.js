import React from 'react';
import styled from 'styled-components';
import { colorAccentColor, textPrimaryColor } from '../../utils/color';
import IconPlayMedium from '../Icon/IconPlayMedium';

const Button = (props) =>{

  let maxWidth = props.maxWidth;
  let width = props.width;
  let height = props.height;
  let text = props.text;
  let strokeColor = props.strokeColor;
  let fillColor = props.fillColor;
  let textColor = props.textColor;
  let textColorHover = props.textColorHover;
  let Icon = props.Icon;
  let iconColor = props.iconColor;
  let fillColorHover = props.fillColorHover;
  let onClickFun =  props.onClickFun;

  let preparedComponent =
    <ButtomStyle
      Icon={Icon}
      maxWidth={maxWidth}
      width={width}
      height={height}
      strokeColor={strokeColor}
      fillColor={fillColor}
      fillColorHover={fillColorHover}
      textColor={textColor}
      textColorHover={textColorHover}>
      {Icon ?
      <ButtonIconStyle>
        <Icon color={iconColor} />
      </ButtonIconStyle> : null}
      <ButtonTextStyle maxWidth={maxWidth}>
        {text}
      </ButtonTextStyle>
    </ButtomStyle>;

  return (preparedComponent);
};

const ButtonTextStyle = styled.div`
  width: ${props => props.maxWidth ? "100%" : "auto"};
  text-align: center;
`;

const ButtonIconStyle = styled.div`
`;

const ButtomStyle = styled.div`
  display: flex;
  height: ${props => props.height};
  justify-content: ${props => props.Icon ? "space-between" : "center"};
  align-items: center;
  line-height: ${props => props.Icon ? "0" : "auto"};
  border-radius: 2px;
  width: ${props => props.maxWidth ? "100%" : props.width};
  border: 1px solid ${props => props.strokeColor};
  text-align: center;
  padding: 5px 0;
  padding: ${props => props.maxWidth ? "auto" : "10px 15px"};
  background-color: ${props => props.fillColor};
  color: ${props => props.textColor};
  cursor: pointer;
  &:hover{
    background-color: ${props => props.fillColorHover};
    color: ${props => props.textColorHover};
  }
`;

export default Button;
