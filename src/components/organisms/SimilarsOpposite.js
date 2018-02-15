import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import resultData from '../../api/resultData';

const Wrap = styled.section`
  list-style-type: none;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidthWide};
  padding: 1rem;
  position: relative;
`;

const SectionTitle= styled.h2`
  font-family: ${props => props.theme.fontPrimary};
  font-size: calc(1rem + 1.75vw);
`;

const SectionTitleIntro = styled.p`
  color: ${props => props.theme.tertiary};
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 2rem;
`;

const ListWrap = styled.section`
  position: relative;
`;

const PersonalitiesLiTitle = styled.h5`
  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.primary};
  font-size: calc(1rem + 0.1vw);
  padding: 10px 0 0;
  margin: 0;
  text-transform: none;
`;

const PersonalitiesText = styled.p`
  font-family: ${props => props.theme.fontSecondary};
  color: ${props => props.theme.tertiary};
  font-size: calc(1rem + 0.05vw);
  padding: 20px 0 0;
  margin: 0;
  text-transform: none;
`;

const PersonalitiesUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const PersonalitiesLi = styled.li`
  color: ${props => props.theme.tertiary};
  display: block;
  font-size: 18px;
  margin: 0 auto;  
  max-width: 50%;
  padding: 0;
  
  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    display: inline-block;
    width: 50%;
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    display: inline-block;
    width: 25%;
  }

`;

const More = styled(Link)`
  border: 0;
  color: ${props => props.theme.primary};
  display: block;
  margin: 1rem 0;
  overflow: hidden;
  padding: 30px 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.25s ease-out;

  span {
    position: relative;
    z-index: 2;
  }
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    cursor: pointer;
    opacity: 1;
    transform: rotateY(0deg);
  }
`;


const IMG = styled.img`
  height: 150px;
  max-width: 100%;
`;


// Similar Personalities
const SimilarPersonalities = (props) => {

  let similarsArray = resultData[props.resultKey].similars;

  let similarsList = similarsArray.map((similarKey) => {

    return (
      <PersonalitiesLi key={similarKey}>
        <More key={similarKey} to={`/design-personality/${resultData[similarKey].slug}`}>
          <IMG src={`../images/SVG/${resultData[similarKey].slug}.svg`} alt={resultData[similarKey].title} />
          <PersonalitiesLiTitle>{resultData[similarKey].title}</PersonalitiesLiTitle>
        </More>
      </PersonalitiesLi>
    );
  })

  return  <PersonalitiesUl>{ similarsList }</PersonalitiesUl>
}

// Opposite Personalities
const OppositePersonalities = (props) => {
  
  let oppositeKey = resultData[props.resultKey].opposite.key;
 
  return  (
    <PersonalitiesUl>
      <PersonalitiesLi>
        <More to={`/design-personality/${resultData[oppositeKey].slug}`}>
          <IMG src={`../images/SVG/${resultData[oppositeKey].slug}.svg`} alt={resultData[oppositeKey].title} />
          <PersonalitiesLiTitle>{resultData[oppositeKey].title}</PersonalitiesLiTitle>
          <PersonalitiesText>{resultData[props.resultKey].opposite.text}</PersonalitiesText>
        </More>
      </PersonalitiesLi>
    </PersonalitiesUl>
  )
}

export default function SimilarsOpposite(props) {
  return (
    <Wrap>
      <header>
        <SectionTitle>Similar Personalities</SectionTitle>
      </header>
      <ListWrap>       
        <SimilarPersonalities resultKey={props.resultKey} info="similars" />
      </ListWrap>

      <SectionTitle>Opposite Personality</SectionTitle>
      <SectionTitleIntro>Nemesis of {resultData[props.resultKey].title}s</SectionTitleIntro>
      <ListWrap>
        <OppositePersonalities resultKey={props.resultKey} info="opposite" />
      </ListWrap>
    </Wrap>
  );
}
