import React from 'react';
import styled from 'styled-components';
import CurrentTitle from '../atoms/CurrentTitle'

const HeaderWrap = styled.header`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Header(props)  {
	return (
		<HeaderWrap>
			<CurrentTitle title={props.question} />
			<h3>Round: {props.round}</h3>
		</HeaderWrap>
	);
}

