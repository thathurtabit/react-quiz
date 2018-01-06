import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuizTitleH1 = styled.h1`
  font-size: 1em;
  margin: 0;
  text-align: center;
  color: palevioletred;
`;

export default function QuizTitle(props)  {
  return (
  	<QuizTitleH1>{props.mainTitle}</QuizTitleH1>
  )
}

QuizTitle.propTypes = {
  mainTitle: PropTypes.string.isRequired,
}