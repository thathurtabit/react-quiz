import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function CurrentTitle(props)  {
  return <Title>{props.title}</Title>
}
