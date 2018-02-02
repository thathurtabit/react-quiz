import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Restart from '../atoms/RestartButton';
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
  font-size: 3vw;
  font-family: 'Merriweather', serif;
`;

const ResultsSubtitle = styled.h4`
  font-size: 1rem;
`;

const ResultsText = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 2rem 2rem 3rem;

  strong {
    text-transform: uppercase;
  }
`;

const More = styled(Link)`
  background: #8E26B7;
  border: 0;
  color: #fff;
  font-family: 'Merriweather', serif;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  padding: 1rem 3rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 2;
  }

  &[disabled],
  &[disabled]:hover {
    background: #8E26B7;
    cursor: not-allowed;
    opacity: 0.5;

    &::after,
    &::before {
      display: none;
    }
  }
  
  &::before {
    background: #333;
    bottom: 0;
    content: '';
    left: 0;
    perspective: 1000px;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotateY(90deg);
    transition: transform 0.25s ease-out, opacity 0.25s ease-out;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
    cursor: pointer;
    transform: rotateY(0deg);
  }
`;


export default function Results(props) {

  return (
    <ResultsWrap style={{display: props.show ? 'block' : 'none'}}>
      <p>You are a:</p>
      <ResultsTitle>
        {props.title}
      </ResultsTitle>
      <ResultsSubtitle>
        You mostly identify with: <strong>{props.resultArray}</strong>
      </ResultsSubtitle>
      <ResultsText>
        <span dangerouslySetInnerHTML={{__html: props.text}} />
      </ResultsText>      
        <More to={`design-personality/${props.moreLink}`}>Learn More</More>      
      <Restart restartText={props.nextText} onClick={props.handleRestart} />
    </ResultsWrap>
  );
}

Results.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  round: PropTypes.number.isRequired,
}
