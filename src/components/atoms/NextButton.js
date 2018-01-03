import React from 'react';
import styled from 'styled-components';

const NextButton = styled.button`
  background: palevioletred;
  border: 0;
  color: #fff;
  font-size: 1em;
  padding: 1rem 2rem;
  text-align: center;

  &:hover {
  	background: black;
  	cursor: pointer;
  }
`;

export default function Next(props)  {
  return <NextButton onClick={() => props.onClick()}>{props.nextText}</NextButton>
}
