import React from 'react';
import styled from 'styled-components';
import personalityInfo from '../../api/personalityInfo';
import PersonalityElements from '../molecules/PersonalityElements';
import resultData from '../../api/resultData';

const Wrap = styled.section`
  list-style-type: none;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidthWide};
  padding: 1rem 1rem 0;
  position: relative;
`;

const SectionTitle= styled.h2`
  font-family: ${props => props.theme.fontPrimary};
  font-size: calc(1rem + 2vw);
`;

const SectionTitleIntro = styled.p`
  color: ${props => props.theme.tertiary};
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 2rem;
`;

const ColWrap = styled.section`
  @media screen and (min-width: 480px) {    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

const Col = styled.section`  
  margin: 1rem;
  padding: 0 3rem;
  text-align: left;
`;

const ColTitle = styled.h4`
  font-family: ${props => props.theme.fontPrimary};
  font-size: calc(1.25rem + 0.5vw);
  padding: 0;
`;

const PersonalitiesUl = styled.ul`
  margin: 1rem;
  padding: 0;
  list-style-type: none;
`;

const PersonalitiesLi = styled.li`
  color: ${props => props.theme.tertiary};  
  font-size: calc(1rem + 0.15vw);
  position: relative;
  line-height: 1.75;
  margin-bottom: 20px;
  padding-left: 5px;

  &::before {
    content: '';
    background: ${props => props.theme.primary};
    position: absolute;
    left: 0;
    width: 6px;
    height: 6px;
    margin-left: -1em;
    top: 12px;
    transform: rotate(45deg);
  }
`;

const ListPersonalities = (props) => {
  let resultKeyArray = Array.from(props.resultKey);
  let personalityKeys = Object.keys(personalityInfo);

  let filteredInfo = []

  filteredInfo = personalityKeys.filter((personalityKey) => {
    let infoFirstChar = personalityKey.charAt(0).toUpperCase();
    return resultKeyArray.includes(infoFirstChar)
  });

  let infoList = filteredInfo.map((infoKey) => {    
    return (
      <PersonalitiesLi key={infoKey}>
          <p>{personalityInfo[infoKey][props.info]}</p>
      </PersonalitiesLi>
    )
  });

  return  <PersonalitiesUl>{ infoList }</PersonalitiesUl>
}

export default function PersonalityInfoList(props) {

  return (
    <Wrap>
      <header>
        <SectionTitleIntro>Understanding</SectionTitleIntro>
        <SectionTitle>{resultData[props.resultKey].title}s</SectionTitle>
        <PersonalityElements resultKey={props.resultKey} />
      </header>
      <ColWrap>
        <Col>
          <ColTitle>Key traits:</ColTitle>
          <ListPersonalities resultKey={props.resultKey} info="overview" />
        </Col>
        <Col>
          <ColTitle>Watch out for:</ColTitle>
          <ListPersonalities resultKey={props.resultKey} info="insight" />
        </Col>
      </ColWrap>
    </Wrap>
  );
}

