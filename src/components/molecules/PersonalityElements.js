import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import personalityInfo from '../../api/personalityInfo';

const ElementsWrap = styled.section`
  margin: 0 auto;
  padding: 1rem;
`;

const PersonalityElementsUl = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
`;

const PersonalityElementsLi = styled.li`
  display: inline-block;
  font-size: 0.5rem;
  margin: 1rem;
  text-transform: uppercase;
  width: 95px;
  position: relative;

  &::before {
    border: 5px solid;
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    width: 0;
    height: 0;
    transform: translateX(-50%);
  }

  &.personality-diverge::before {
    border-color: ${props => props.theme.personality.diverge};
  }
  
  &.personality-converge::before {
    border-color: ${props => props.theme.personality.converge};
    border-radius: 100%;
  }

  &.personality-abstract::before {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid ${props => props.theme.personality.abstract};
    top: -15px;
  }

  &.personality-real::before {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid ${props => props.theme.personality.real};
    top: -15px;
  }

  &.personality-individual::before {
    border-color: ${props => props.theme.personality.individual};
    transform: rotate(45deg) translate(-3px, 5px);
    top: -12px;
  }

  &.personality-group::before {
    border-right: 6px solid transparent;
    border-top: 6px solid ${props => props.theme.personality.group};
    border-left: 6px solid ${props => props.theme.personality.group};
    border-bottom: 6px solid ${props => props.theme.personality.group};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &.personality-sense {
    background: transparent;
    position: relative;

    &::before {
      background: ${props => props.theme.personality.sense};
      border-radius: 0;
      border: 0;
      content: "";
      height: 4px;
      left: 50%;
      translateX(-50%);
      position: absolute;
      top: -8px;
      width: 14px;
    }

    &::after {
      background: ${props => props.theme.personality.sense};
      border-radius: 0;
      border: 0;
      content: "";
      height: 14px;
      left: 50%;
      translateX(-50%);
      position: absolute;
      transform: translateX(-2px);
      top: -13px;
      width: 4px;
    }
  }

  &.personality-measure::before {
    border-color: ${props => props.theme.personality.measure};
    transform: skew(20deg) translateX(-7px);
    width: 0px;
  }
`;

const PersonalityElementTitle = styled.h5`
  color: ${props => props.theme.tertiary};
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
  margin: 0;
  padding: 0.75rem;

  span {
    display: block;
    color: ${props => props.theme.primary};
    font-family: ${props => props.theme.fontPrimary};
    font-size: 1.25rem;
    letter-spacing: 0;
    padding: 0 0 0.5rem;
  }

`;

const ListPersonalityElements = (props) => {
  let resultKeyArray = Array.from(props.resultKey);
  let personalityKeys = Object.keys(personalityInfo);

  let filteredInfo = [];

  filteredInfo = personalityKeys.filter((personalityKey) => {
    let infoFirstChar = personalityKey.charAt(0).toUpperCase();
    return resultKeyArray.includes(infoFirstChar)
  });

  let infoList = filteredInfo.map((infoKey) => {  
    let infoFirstChar = infoKey.charAt(0).toUpperCase();

    return (
      <PersonalityElementsLi className={`personality-${infoKey}`} key={infoKey}>
          <PersonalityElementTitle>
            <span>{infoFirstChar}</span>
            {personalityInfo[infoKey].name}
          </PersonalityElementTitle>
      </PersonalityElementsLi>
    )
  });

  return  <PersonalityElementsUl>{ infoList }</PersonalityElementsUl>
}

export default function PersonalityElements(props)  {
  return (
    <ElementsWrap>
      <ListPersonalityElements resultKey={props.resultKey} />
    </ElementsWrap>
  )
}

PersonalityElements.propTypes = {
  resultKey: PropTypes.string,
}
