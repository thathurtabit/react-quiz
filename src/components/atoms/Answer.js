import React from 'react';

export default function Answer(props) {

  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name={props.group}
        id={props.id}
        value={props.answerType}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.id}>
        {props.answerContent}
      </label>
    </li>
  );

}

// Answer.propTypes = {
//   answerType: React.PropTypes.string.isRequired,
//   answerContent: React.PropTypes.string.isRequired,
//   answer: React.PropTypes.string.isRequired,
//   onAnswerSelected: React.PropTypes.func.isRequired
// };
