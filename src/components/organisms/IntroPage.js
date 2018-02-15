import React from 'react';
import styled from 'styled-components';
import QuizButton from '../atoms/QuizButton';
import SvgExperimenter from '../atoms/svgs/experimenter';
import introPageData from '../../api/introPageData';
import PropTypes from 'prop-types';

const IntroWrap = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 5rem 1rem 5rem;
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    padding: 10rem 3rem 5rem;
  }
`;

const IntroSubtitle = styled.h2`
  font-size: calc(15vw);
  font-family: ${props => props.theme.fontPrimary};
  margin-bottom: 3rem;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    font-size: calc(50px + 3.75vw);
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    font-size: calc(50px + 2vw);
  }
`;

const IntroText = styled.p`
  font-size: calc(1rem + 0.25vw);
  line-height: 1.65;
  margin: 1rem 1rem 2.5rem;
  padding: 0;

  strong {
    font-family: ${props => props.theme.fontPrimary};
    font-weight: normal;
  }
`;

export default function IntroPage(props) {
  return (
    <IntroWrap>
      <SvgExperimenter />
      <IntroSubtitle>        
        {introPageData.p1}         
      </IntroSubtitle>        
      <IntroText>
        <span dangerouslySetInnerHTML={{__html: introPageData.p2}} />
      </IntroText>
      <IntroText>
        <span dangerouslySetInnerHTML={{__html: introPageData.p3}} />
      </IntroText>
      <QuizButton text="Start" to="/quiz"  />
    </IntroWrap>
  );  
}

IntroPage.propTypes = {
  content: PropTypes.object,
}
