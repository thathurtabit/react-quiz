import React from 'react';
import styled from 'styled-components';

const AnswerLi = styled.li`
  margin: 0 5%;
  width: 50%;
`;

const AnswerInput = styled.input`
  margin: 20px;
  display: none;

  &:checked+label{
    background: palevioletred;
    color: #fff;
  } 
`;

const AnswerLabel = styled.label`
  padding: 20px;
  background: #fff;
  display: block;
  font-size: 1.75rem;
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
        //onChange={props.onAnswerSelected}
      />
      <AnswerLabel
        className={props.active}
        htmlFor={props.id}>
        {props.answerContent}
      </AnswerLabel>
    </AnswerLi>
  );

}

// Answer.propTypes = {
//   answerType: React.PropTypes.string.isRequired,
//   answerContent: React.PropTypes.string.isRequired,
//   answer: React.PropTypes.string.isRequired,
//   onAnswerSelected: React.PropTypes.func.isRequired
// };
