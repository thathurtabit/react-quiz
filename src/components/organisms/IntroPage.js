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
  margin: 4rem auto;
  max-width: 780px;
  padding: 2rem 3rem 5rem;
  position: relative;
`;

const IntroSubtitle = styled.h2`
  font-size: calc(15vw);
  font-family: 'Merriweather', serif;

  @media only screen and (min-width: 600px)  {
    font-size: calc(50px + 3vw);
  }
`;

const IntroText = styled.p`
  font-size: 1.15rem;
  line-height: 1.65;
  margin: 2rem 2rem 3rem;

  strong {
    font-family: Merriweather;
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
