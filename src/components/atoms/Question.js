import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionText = styled.h2`
  font-family: 'Merriweather', serif;
  font-size: 3rem;
  margin: 2rem;
  padding: 2rem;
  text-align: center;
`;

export default function Question(props)  {
	return (
		<QuestionText>
      {props.question}
		</QuestionText>
	);
}

Question.propTypes = {
  question: PropTypes.string,
}
