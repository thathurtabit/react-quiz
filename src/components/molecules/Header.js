import React from 'react';
import styled from 'styled-components';
import RoundTitle from '../atoms/RoundTitle';
import QuizTitle from '../atoms/QuizTitle';
import PropTypes from 'prop-types';

const HeaderWrap = styled.header`
  font-size: 1.5em;
  margin: 2rem 1rem 0;
  text-align: center;
  color: palevioletred;
`;

const HeaderP = styled.p`
    background: rgba(0,0,0,0.025);
    border-radius: 10px;
    color: #999;
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
    margin: 1rem 1rem 0;
    padding: 5px 10px;
    text-align: center;
`;


export default function Header(props)  {
	return (
		<HeaderWrap>
			<QuizTitle mainTitle={props.mainTitle} />
			<HeaderP style={{display: props.showRound ? 'inline-block' : 'none'}}>Round: {props.round} of {props.roundsTotal}</HeaderP>
      <RoundTitle showRound={props.showRound} roundTitle={props.question} />
		</HeaderWrap>
	);
}

Header.propTypes = {
  mainTitle: PropTypes.string,
  round: PropTypes.number,
  roundTotal: PropTypes.number,
  question: PropTypes.string,
}
