import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuizTitleH1 = styled.h1`
  color: palevioletred;
  font-size: 2rem;
  margin: 0 0 2rem;
  position: relative;
  text-align: center;

  &::after {
  	background: rgba(0,0,0,0.15);
  	bottom: -20px;
  	content: "";
  	height: 3px; 
  	left: 50%;
  	position: absolute;
  	transform: translate(-50%, -50%);
  	width: 40px;
  }
`;

export default function QuizTitle(props)  {
  return (
  	<QuizTitleH1>{props.mainTitle}</QuizTitleH1>
  )
}

QuizTitle.propTypes = {
  mainTitle: PropTypes.string.isRequired,
}