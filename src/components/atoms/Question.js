import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const QuestionText = styled.h2`
  font-family: ${props => props.theme.fontPrimary};
  font-size: calc(2rem + 2vw);
  margin: 2rem 1rem;
  padding: 2rem 1rem;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    font-size: calc(2rem + 1.5vw);
    margin: 2rem;
    padding: 2rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpointLG}) {
    font-size: 3.5rem;
  }

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
    <QuestionText className={`${props.ready ? "ready" : "not-ready"}`}>
      {props.question}
    </QuestionText>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  ready: PropTypes.string.isRequired
};
