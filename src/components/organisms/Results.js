import React from 'react';
import styled from 'styled-components';
import Restart from '../atoms/RestartButton';
import HeroImage from '../atoms/HeroImage';
import SocialShare from '../molecules/SocialShare';
import PersonalityInfoList from '../organisms/PersonalityInfoList';
import SimilarsOpposite from '../organisms/SimilarsOpposite';
import PropTypes from 'prop-types';

const ResultsWrap = styled.section`
  margin-bottom: 6rem;
`;

const PageWrap = styled.section`
  position: relative;
  max-width: ${props => props.theme.maxContentWidth};
  margin: ${props => props.extraSpacing ? '0 auto 10rem' : '0 auto 3rem'};
`;


const ResultsTitle = styled.h2`
  font-family: ${props => props.theme.fontPrimary};
  margin: 1rem 1rem 2rem; 
  font-size: calc(13vw);

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
      font-size: calc(20px + 5vw);
      margin: 1rem 1rem 4rem; 
  }
  
  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
      font-size: calc(20px + 4vw);
      margin: 1rem 1rem 5rem; 
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


export default function Results(props) {
  return (
    <ResultsWrap style={{display: props.show ? 'block' : 'none'}}>
      <PageWrap>
        <ResultIntro>You are a:</ResultIntro>
        <ResultsTitle>
          {props.title}
        </ResultsTitle>
        <HeroImage src={props.moreLink} alt={props.title} />
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
        <SocialShare resultTweet personality={props.title} />
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
