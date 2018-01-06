import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const IntroText = styled.p`
  font-size: 1em;
  text-align: center;
  color: #999;
`;

export default function Intro(props)  {
  return <IntroText>{props.introText}</IntroText>
}

Intro.propTypes = {
  introText: PropTypes.string.isRequired,
}