import React, { useState } from 'react';
import styled from 'styled-components';
import SoundSection from './SoundSection';
import SpeedSection from './SpeedSection';
import CaptionSection from './CaptionSection';

const OptionsSection = () =>{
  const [level, setLevel] = useState(0);

  const onClick = () => {
    setLevel((level+1)%4);
  }

  let preparedComponent =
    <OptionsSectionStyle onClick={onClick}>
      <CaptionSection/>
      <SoundSection/>
      <SpeedSection/>
    </OptionsSectionStyle>;

  return (preparedComponent)
};

const OptionsSectionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  margin: 0 10px;
`;

export default OptionsSection;
