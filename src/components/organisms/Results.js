import React from 'react';
import styled from 'styled-components';
import Next from '../atoms/NextButton';

const ResultsWrap = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  position: relative;
  padding: 0;
`;

const ResultsTitle = styled.h2`
  font-size: 2rem;
`;

const ResultsText = styled.p`
  font-size: 1rem;
`;

export default function Results(props) {

  return (
    <ResultsWrap style={{display: props.show ? 'block' : 'none'}}>
      <ResultsTitle>
        {props.title}
      </ResultsTitle>
      <ResultsText>
        {props.text}
      </ResultsText>
      <Next nextText={props.nextText} disabled={!props.disabled} onClick={props.handleRestart} />
    </ResultsWrap>
  );

}

// AnswerChoices.propTypes = {
//   answerType: React.PropTypes.string.isRequired,
//   answerContent: React.PropTypes.string.isRequired,
//   answer: React.PropTypes.string.isRequired,
//   onAnswerSelected: React.PropTypes.func.isRequired
// };
