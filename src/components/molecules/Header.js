import React from 'react';
import styled from 'styled-components';
import RoundTitle from '../atoms/RoundTitle';
import QuizTitle from '../atoms/QuizTitle';

const HeaderWrap = styled.header`
  font-size: 1.5em;
  margin: 2rem 1rem 0;
  text-align: center;
  color: palevioletred;
`;

const HeaderP = styled.p`
  font-size: 1.5rem;
  margin: 2rem 1rem 0;
  text-align: center;
  color: palevioletred;
`;


export default function Header(props)  {
	return (
		<HeaderWrap>
			<QuizTitle mainTitle={props.mainTitle} />
			<RoundTitle rountTitle={props.question} />
			<HeaderP>Round: {props.round}</HeaderP>
		</HeaderWrap>
	);
}

