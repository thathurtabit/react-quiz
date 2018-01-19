import React from 'react';
import Answer from '../atoms/Answer';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    content: "vs";
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
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
      />
    );
  }

  return (
    <AnswerUl>
      {props.answerChoices.map(renderAnswerChoices)}
    </AnswerUl>
  );

}

AnswerChoices.propTypes = {
  answer: PropTypes.string,
  answerChoices: PropTypes.array,
}

