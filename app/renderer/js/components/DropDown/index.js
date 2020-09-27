import React, { useState } from 'react';
import styled from 'styled-components';
import IconChevronDown from '../Icon/IconLittleChevronDown';

const DropDown = (props) =>{

  let dropdownTitle = props.dropdownTitle;
  let miniDropdown = props.miniDropdown;
  let selectedContent = props.selectedContent;
  let dropdownContent = props.dropdownContent;

  const [showDropDown, setShowDropDown] = useState(false);

  let colorChevron = !miniDropdown ?  "var(--color-accent)" : (showDropDown ? "var(--text-primary)" : "var(--background-primary)") ;

  let preparedComponent =
    <ContentStyle miniDropdown={miniDropdown}>
      <DropDownRelativeStyle>
        <DropDownStyle
          onMouseEnter={(e) => {e.stopPropagation(); setShowDropDown(true)}}
          onMouseLeave={(e) => {e.stopPropagation(); setShowDropDown(false)}}
          miniDropdown={miniDropdown}>
          <DropDownMainPartStyle miniDropdown={miniDropdown}>
            <DropDownTitleAndContentStyle>
              <DropDownTitleStyle miniDropdown={miniDropdown}>
                {dropdownTitle}
              </DropDownTitleStyle>
              {selectedContent ?
                <DropDownSelectedContentStyle miniDropdown={miniDropdown}>
                  {selectedContent}
                </DropDownSelectedContentStyle>:null}
            </DropDownTitleAndContentStyle>
            {dropdownContent ?
            <DropDownArrowStyle>
              <IconChevronDown color={colorChevron} />
            </DropDownArrowStyle> : null}
          </DropDownMainPartStyle>
          {dropdownContent && showDropDown ?
          <DropDownBoxPartStyle>
            <DropDownCoverPartStyle showDropDown={showDropDown} miniDropdown={miniDropdown}>
              <DropDownTitleAndContentStyle>
                <DropDownTitleStyle >
                  {dropdownTitle}
                </DropDownTitleStyle >
                {selectedContent ?
                  <DropDownSelectedContentStyle>
                    {selectedContent}
                  </DropDownSelectedContentStyle>:null}
              </DropDownTitleAndContentStyle>
              <DropDownArrowStyle>
                <IconChevronDown color={colorChevron}/>
              </DropDownArrowStyle>
            </DropDownCoverPartStyle>
            <DropdownDataContainerStyle>
              {dropdownContent.map((data,key) =>
                <DropdownDataStyle miniDropdown={miniDropdown} key={key}>{data}</DropdownDataStyle>)}
            </DropdownDataContainerStyle>
          </DropDownBoxPartStyle>:null}
        </DropDownStyle>
      </DropDownRelativeStyle>
    </ContentStyle>;

  return (preparedComponent);
};



const DropDownTitleAndContentStyle = styled.div`
  display:flex;
  min-width: 15px;
`;

const DropdownDataStyle = styled.div`
  display: flex;
  justify-content: ${props => !props.miniDropdown  ? "flex-start;" : "center;" }
  text-align: center;
  padding: 2px 8px;
  margin: 0 2px;
  cursor: pointer;
  color: var(--text-intermediate);
  &:hover {
    background-color: var(--background-contrast);
    border-radius: 2px;
    color: var(--text-primary);
  }
`;

const DropdownDataContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px 0;
`;

const DropDownCoverPartStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 2px;
  border-bottom: 1px solid var(--divider-primary);
`;

const DropDownArrowStyle = styled.div`
  margin-left: 5px;
`;

const DropDownSelectedContentStyle = styled.div`
  color: ${props => props.miniDropdown  ? "var(--background-primary);" : "var(--text-primary);" }
`;

const DropDownTitleStyle = styled.div`
  color: ${props => props.miniDropdown  ? "var(--background-primary);" : "var(--text-primary);" }
  margin-right: 2px;
`;

const DropDownBoxPartStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  border-radius: 2px;
  box-shadow: var(--top-shadow);
  top: 0;
  left: -2px;
  background-color: var(--background-primary);
  color: var(--text-primary);
`;

const DropDownMainPartStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => !props.miniDropdown  ? "var(--background-primary);" : "var(--title-background);" }
`;

const DropDownStyle = styled.div`
  display: flex;
  font-size: ${props => props.miniDropdown ? "10px": "12px"};
`;

const DropDownRelativeStyle = styled.div`
  position: relative;
`;

const ContentStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.miniDropdown ? "var(--title-background);": "var(--background-primary);"};
  border: 1px solid  ${props => props.miniDropdown ? "var(--title-background);": "var(--divider-secondary);"};
  padding: 2px 4px;
  margin-right: 2px;
  border-radius: 2px;
  z-index: 10;
`;

export default DropDown;
