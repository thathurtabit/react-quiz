import React from 'react';
import styled from 'styled-components';
import Next from '../atoms/NextButton';
import PropTypes from 'prop-types';

const IntroWrap = styled.section`
  align-items: center;
  background: rgba(0,0,0,0.05);
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin: 4rem auto;
  max-width: 700px;
  padding: 2rem 3rem 5rem;
  position: relative;
`;

const IntroTitle = styled.h1`
  font-size: 2.5rem;
`;

const IntroSubtitle = styled.h2`
  font-size: 1.5rem;
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  line-height: 1.25;
  margin: 2rem 2rem 2rem;
`;

export default function IntroPage(props) {

  return (
    <IntroWrap style={{display: props.display ? 'block' : 'none'}}>
      <IntroTitle>
        {props.title}
      </IntroTitle>
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
