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
  border-radius: 0 10px 0 0;
  display: inline-block;
  font-size: 0.5rem;
  margin: 1rem;
  text-transform: uppercase;
  width: 95px;
  position: relative;

  &:nth-child(even)::before {
    border-radius: 100%;
  }
  
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
  }

  &.personality-abstract::before {
    border-color: red;
  }

  &.personality-real::before {
    border-color: red;
  }

  &.personality-individual::before {
    border-color: red;
  }

  &.personality-group::before {
    border-color: red;
  }

  &.personality-sense::before {
    border-color: red;
  }

  &.personality-measure::before {
    border-color: red;
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
      <PersonalityElementsLi personality={infoKey} key={infoKey}>
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
