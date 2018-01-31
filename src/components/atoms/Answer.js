import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AnswerLi = styled.li`
  margin: 0 5%;
  width: 50%;
`;

const AnswerInput = styled.input`
  margin: 10px;
  display: none;

  &:checked+label{
    background: #8E26B7;
    color: #fff;
  } 
`;

const AnswerLabel = styled.label`
  padding: 20px;
  background: #fff;
  display: block;
  font-size: 1.5rem;
  transition: background 0.25s ease-out, color 0.25s ease-out;

  &:hover {
    background: rgba(0,0,0,0.2);
    color: #fff;
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
