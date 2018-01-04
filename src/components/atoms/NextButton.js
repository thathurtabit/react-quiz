import React from 'react';
import styled from 'styled-components';

const NextButton = styled.button`
  background: palevioletred;
  border: 0;
  color: #fff;
  font-size: 1em;
  padding: 1rem 2rem;
  text-align: center;

  &[disabled],
  &[disabled]:hover {
  	background: palevioletred;
  	cursor: not-allowed;
  	opacity: 0.5;
  }
  &:hover {
  	background: black;
  	cursor: pointer;
  }
`;

export default function Next(props)  {
  return <NextButton id={`button${props.round}`} onClick={() => props.onClick()} disabled={props.disabled}>{props.nextText}</NextButton>
}
