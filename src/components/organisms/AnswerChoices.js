import React from 'react';
import Answer from '../atoms/Answer';

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
        answer={props.answer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <ul className="answerOptions">
      {props.answerChoices.map(renderAnswerChoices)}
    </ul>
  );

}

// AnswerChoices.propTypes = {
//   answerType: React.PropTypes.string.isRequired,
//   answerContent: React.PropTypes.string.isRequired,
//   answer: React.PropTypes.string.isRequired,
//   onAnswerSelected: React.PropTypes.func.isRequired
// };
