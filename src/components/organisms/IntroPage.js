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
  max-width: 750px;
  padding: 2rem 3rem 5rem;
  position: relative;
`;

const IntroSubtitle = styled.h2`
  font-size: 7vw;
  font-family: 'Merriweather', serif;
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 2rem 2rem 2rem;
`;

export default function IntroPage(props) {

  return (
    <IntroWrap style={{display: props.display ? 'block' : 'none'}}>
      <IntroSubtitle>
        {props.content.p1}
      </IntroSubtitle>
      <IntroText>
        {props.content.p2}
      </IntroText>
      <IntroText>
        {props.content.p3}
      </IntroText>
      <Next nextText={props.nextText} round={props.round} onClick={props.onClick} />
    </IntroWrap>
  );
}

IntroPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object,
}
