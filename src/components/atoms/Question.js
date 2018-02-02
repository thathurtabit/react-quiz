import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionText = styled.h2`
  font-family: 'Merriweather', serif;
  font-size: 3rem;
  margin: 2rem;
  padding: 2rem;
  text-align: center;

  &.not-ready {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 5s ease-out, transform 5s ease-out;
    transition-delay: 1s;
  }

  &.ready {
    opacity: 1;
    transition-delay: 1s;
    transform: translateY(0);
  }
`;

export default function Question(props) {
	return (
		<QuestionText className={`${ props.ready ? 'ready' : 'not-ready' }`}>
      {props.question}
		</QuestionText>
	);
}

Question.propTypes = {
  question: PropTypes.string,
}
