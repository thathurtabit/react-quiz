import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AnswerLi = styled.li`
  margin: 0 5%;

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    width: 50%;
  }
`;

const AnswerInput = styled.input`
  margin: 10px;
  display: none;

  &:checked+label{
    background: ${props => props.theme.primary};
    color: ${props => props.theme.bg};
    box-shadow: inset 0 5px 0 rgba(0, 0, 0, 0.05);
  } 
`;

const AnswerLabel = styled.label`
  padding: 2rem;
  background: ${props => props.theme.bg};
  border-radius: 3px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  display: block;
  font-size: 1.5rem;
  transition: background 0.25s ease-out, color 0.25s ease-out;

  &:hover {
    background: rgba(0,0,0,0.05);
    color: ${props => props.theme.secondary};
    cursor: pointer;
  }
`;

export default function Answer(props) {

  return (
    <AnswerLi>
      <AnswerInput
        type="radio"
        className="radioCustomButton"
        name={props.group}
        id={props.id}
        value={props.answerType}
      />
      <AnswerLabel
        htmlFor={props.id}>
        {props.answerContent}
      </AnswerLabel>
    </AnswerLi>
  );

}

Answer.propTypes = {
  group: PropTypes.string,
  id: PropTypes.string,
  answerType: PropTypes.string,
  answerContent: PropTypes.string,
}
