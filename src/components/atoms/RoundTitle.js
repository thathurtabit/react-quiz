import React from 'react';
import styled from 'styled-components';

const RoundTitleH2 = styled.h2`
  font-size: 1em;
  margin: 0;
  text-align: center;
  color: palevioletred;
`;

export default function RoundTitle(props)  {
  return (
  	<RoundTitleH2>{props.title}</RoundTitleH2>
  )
}
