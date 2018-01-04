import React from 'react';
import styled from 'styled-components';
import CurrentTitle from '../atoms/CurrentTitle'

const HeaderWrap = styled.header`
  font-size: 1.5em;
  margin: 2rem 1rem 0;
  text-align: center;
  color: palevioletred;
`;

const HeaderP = styled.p`
  font-size: 0.75em;
  margin: 2rem 1rem 0;
  text-align: center;
  color: palevioletred;
`;


export default function Header(props)  {
	return (
		<HeaderWrap>
			<CurrentTitle title={props.question} />
			<HeaderP>Round: {props.round}</HeaderP>
		</HeaderWrap>
	);
}

