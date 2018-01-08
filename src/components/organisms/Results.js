import React from 'react';
import styled from 'styled-components';
import Next from '../atoms/NextButton';
import PropTypes from 'prop-types';

const ResultsWrap = styled.section`
  align-items: center;
  background: rgba(0,0,0,0.05);
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin: 4rem auto;
  max-width: 700px;
  padding: 2rem 3rem 5rem;
  position: relative;
`;

const ResultsTitle = styled.h2`
  font-size: 2rem;
`;

const ResultsSubtitle = styled.h4`
  font-size: 1rem;
`;

const ResultsText = styled.p`
  font-size: 1.25rem;
  line-height: 1.25;
  margin: 2rem 2rem 3rem;
`;

export default function Results(props) {

  return (
    <ResultsWrap style={{display: props.show ? 'block' : 'none'}}>
      <ResultsTitle>
        {props.title}
      </ResultsTitle>
      <ResultsSubtitle>
        You mostly identify with: <strong>{props.resultArray}</strong>
      </ResultsSubtitle>
      <ResultsText>
        {props.text}
      </ResultsText>
      <Next nextText={props.nextText} disabled={!props.disabled} round={props.round} onClick={props.handleRestart} />
    </ResultsWrap>
  );
}

Results.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  round: PropTypes.number.isRequired,
}
