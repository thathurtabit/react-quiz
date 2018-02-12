import React from 'react';
import styled from 'styled-components';
import Next from '../atoms/NextButton';
import PropTypes from 'prop-types';

const IntroWrap = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin: 1rem auto;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 2rem 1rem 5rem;
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    margin: 4rem auto;
    padding: 2rem 3rem 5rem;
  }
`;

const IntroSubtitle = styled.h2`
  font-size: calc(15vw);
  font-family: ${props => props.theme.fontPrimary};

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    font-size: calc(50px + 3.75vw);
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
    <IntroWrap style={{display: props.display ? 'block' : 'none'}}>
      <IntroSubtitle>        
        {props.content.p1}         
      </IntroSubtitle>
      <IntroText>
        <span dangerouslySetInnerHTML={{__html: props.content.p2}} />
      </IntroText>
      <IntroText>
        {props.content.p3}
      </IntroText>
      <Next nextText={props.nextText} round={props.round} onClick={props.onClick} />
    </IntroWrap>
  );
}

IntroPage.propTypes = {
  content: PropTypes.object,
}
