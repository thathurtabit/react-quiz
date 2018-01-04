import React from 'react';
import Answer from '../atoms/Answer';
import styled from 'styled-components';

const AnswerUl = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  position: relative;
  padding: 0;

  &::before {
    background: rgba(0,0,0,0.5);
    border-radius: 100%;
    color: #fff;
    content: "or";
    font-size: 1rem;
    height: 30px;
    left: 50%;
    line-height: 30px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
  }
`;


export default function AnswerChoices(props) {

   function renderAnswerChoices(key) {
    return (
      <Answer
        id={key.id}
        group={key.group}
        key={key.content}
        checked={key.checked}
        answerContent={key.content}
        answerType={key.type}
        active={key.active}
        answer={props.answer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <AnswerUl>
      {props.answerChoices.map(renderAnswerChoices)}
    </AnswerUl>
  );

}

// AnswerChoices.propTypes = {
//   answerType: React.PropTypes.string.isRequired,
//   answerContent: React.PropTypes.string.isRequired,
//   answer: React.PropTypes.string.isRequired,
//   onAnswerSelected: React.PropTypes.func.isRequired
// };
