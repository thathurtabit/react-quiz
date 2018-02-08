import React from 'react';
import styled from 'styled-components';
import personalityInfo from '../../api/personalityInfo';
import resultData from '../../api/resultData';

const Wrap = styled.section`
  list-style-type: none;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.maxContentWidthWide};
  padding: 1rem 1rem 3rem;
  position: relative;
`;

const SectionTitle= styled.h2`
  font-family: ${props => props.theme.fontPrimary};
  font-size: 2.5rem;
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
  padding: 0;  
  text-align: left;
`;

const ColTitle = styled.h4`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-family: ${props => props.theme.fontPrimary};
  font-size: 1.5rem;
  padding: 20px;
`;

const PersonalitiesUl = styled.ul`
  margin: 20px;
  padding: 0;
`;

const PersonalitiesLi = styled.li`
  color: ${props => props.theme.tertiary};
  font-size: 18px;
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
        <SectionTitleIntro>[{props.resultKey}]</SectionTitleIntro>
      </header>
      <ColWrap>
        <Col>
          <ColTitle>Key personality traits:</ColTitle>
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

