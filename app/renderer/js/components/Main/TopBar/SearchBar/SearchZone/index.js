import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import onClickManager from '../../../../../utils/onClickManager';
import { useDispatch } from 'react-redux';
import { closeFocus, openFocus } from '../../../../../store/search';

const SearchZone = () =>{

  const dispatch = useDispatch();

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInside = onClickManager(ref1);
  //console.log(isInside);

  useEffect(() => {
    if (isInside && ref2.current){
      ref2.current.focus();
      dispatch(openFocus());
    }
    else{
      dispatch(closeFocus());
    }
  }, [isInside]);



  let preparedComponent =
    <SearchZoneStyle ref={ref1}>
      {isInside ?
        <SearchZoneTextWritingMasterStyle>
          <SearchZoneTextWritingStyle
            ref={ref2}
            className="form-control"
            placeholder={"Search for a movie, tv show, person ..."}
            type="input"
            name="search"/>
        </SearchZoneTextWritingMasterStyle> :
        <SearchZoneTextFixedStyle>
          Search for a movie, tv show, person ...
        </SearchZoneTextFixedStyle>}
    </SearchZoneStyle>;

  return (preparedComponent)
};

const SearchZoneTextWritingMasterStyle = styled.form`
  width: 100%;
`;

const SearchZoneTextWritingStyle = styled.input`
  display: flex;
  align-items: center;
  height: 100%;
  color: var(--text-primary);
  cursor: text;
  font-family: Open sans;
  font-size: 14px;
  width: 100%;
`;

const SearchZoneTextFixedStyle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: var(--text-intermediate);
  cursor: text;
  width: 100%;
`;

const SearchZoneStyle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  min-width: 400px;
`;

export default SearchZone;
