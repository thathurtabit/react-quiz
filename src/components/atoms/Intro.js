import React from 'react';
import styled from 'styled-components';

const IntroText = styled.p`
  font-size: 1em;
  text-align: center;
  color: #999;
`;

export default function Intro(props)  {
  return <IntroText>{props.introText}</IntroText>
}
