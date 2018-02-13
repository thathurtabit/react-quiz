import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Restart from '../atoms/RestartButton';
import HeroImage from '../atoms/HeroImage';
import SocialShare from '../molecules/SocialShare';
import PersonalityInfoList from '../organisms/PersonalityInfoList';
import SimilarsOpposite from '../organisms/SimilarsOpposite';
import PropTypes from 'prop-types';

const ResultsWrap = styled.section`

`;

const PageWrap = styled.section`
  position: relative;
  max-width: ${props => props.theme.maxContentWidth};
  margin: ${props => props.extraSpacing ? '0 auto 10rem' : '0 auto 3rem'};
`;


const ResultsTitle = styled.h2`
  font-family: ${props => props.theme.fontPrimary};
  margin: 1rem 1rem 2rem; 
  font-size: calc(15vw);

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
      font-size: calc(20px + 5vw);
      margin: 1rem 1rem 4rem; 
  }
  
  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
      font-size: calc(20px + 4vw);
      margin: 1rem 1rem 5rem; 
  }
`;

const ResultsSubtitle = styled.h4`
  color: #999;
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 5rem;

  strong {
    color: ${props => props.theme.pPrimary};
    font-family: ${props => props.theme.fontPrimary};
    font-weight: normal;
    font-size: 0.9rem;
    letter-spacing: 0;
  }
`;

const ResultIntro = styled.p`
  color: ${props => props.theme.tertiary};
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 5rem;
`;

const ResultsText = styled.p`
  font-size: calc(1rem + 0.5vw);
  line-height: 1.75;
  margin: 2rem;
  position: relative;

  strong {
    font-family: ${props => props.theme.fontPrimary};
    letter-spacing: 0;
  }
`;

const HR = styled.hr`
  border: 0;
  margin: 5rem 0 8rem;
  overflow: visible;
  padding: 0;
  position: relative;

  &::before {
    border-top: 5px solid rgba(0, 0, 0, 0.05);
    content: '';
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 50px;
  }
`;

const More = styled(Link)`
  background: ${props => props.theme.primary};
  border: 0;
  color: ${props => props.theme.bg};
  display: inline-block;
  font-family: ${props => props.theme.fontPrimary};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  padding: 1rem 3rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 2;
  }

  &[disabled],
  &[disabled]:hover {
    background: ${props => props.theme.primary};
    cursor: not-allowed;
    opacity: 0.5;

    &::after,
    &::before {
      display: none;
    }
  }
  
  &::before {
    background: ${props => props.theme.secondary};
    bottom: 0;
    content: '';
    left: 0;
    perspective: 1000px;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotateY(90deg);
    transition: transform 0.25s ease-out, opacity 0.25s ease-out;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
    cursor: pointer;
    transform: rotateY(0deg);
  }
`;


export default function Results(props) {
  return (
    <ResultsWrap style={{display: props.show ? 'block' : 'none'}}>
      <PageWrap>
        <ResultIntro>You are a:</ResultIntro>
        <ResultsTitle>
          {props.title}
        </ResultsTitle>
        <HeroImage src={props.moreLink} alt={props.title} />
        <ResultsSubtitle>
          You mostly identify with: <strong>{props.resultArray}</strong>
        </ResultsSubtitle>
        <ResultsText>
          <span dangerouslySetInnerHTML={{__html: props.text}} />
        </ResultsText>
      </PageWrap>

      <HR />   
      <PersonalityInfoList resultKey={props.resultKey} />
      <HR />    
      <SimilarsOpposite resultKey={props.resultKey} />
      <HR />

      <PageWrap>
        <ResultIntro>Share your result</ResultIntro>
        <SocialShare personality={props.title} />
        <HR />
        <ResultIntro>Not a {props.title}?</ResultIntro>
        <Restart restartText={props.nextText} onClick={props.handleRestart} />
      </PageWrap>
    </ResultsWrap>
  );
}

Results.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  round: PropTypes.number.isRequired,
  resultKey: PropTypes.string.isRequired
}
