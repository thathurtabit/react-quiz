import React, { Component } from 'react';
import styled from 'styled-components';
import Next from '../atoms/NextButton';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group'

const IntroWrap = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 15rem 1rem 5rem;
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    padding: 20rem 3rem 5rem;
  }

  &::before {
    background-size: contain;
    background: url(../images/SVG/experimenter.svg) no-repeat center top;
    content: '';
    height: 15%;
    left: 0;
    opacity: 0.9;
    position: absolute;
    right: 0;
    top: 7%;
    transform: translateX(-3%);
    z-index: -1;
    
    @media screen and (min-width: ${props => props.theme.breakpointSM}) {
      height: 200px;
      top: 10%;
    }

  }
`;

const IntroSubtitle = styled.h2`
  background: rgba(255, 255, 255, 0.5);
  font-size: calc(15vw);
  font-family: ${props => props.theme.fontPrimary};
  margin-bottom: 3rem;
  text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5);

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    font-size: calc(50px + 3.75vw);
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    font-size: calc(50px + 3vw);
  }
`;

const IntroText = styled.p`
  background: rgba(255, 255, 255, 0.5);
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
    <IntroWrap style={{display: props.display ? 'block' : 'none'}}>
      <IntroSubtitle>        
        {props.content.p1}         
      </IntroSubtitle>        
      <IntroText>
        <span dangerouslySetInnerHTML={{__html: props.content.p2}} />
      </IntroText>
      <IntroText>
        <span dangerouslySetInnerHTML={{__html: props.content.p3}} />
      </IntroText>
      <Next nextText={props.nextText} round={props.round} onClick={props.onClick} />
    </IntroWrap>
  );  
}

IntroPage.propTypes = {
  content: PropTypes.object,
}
