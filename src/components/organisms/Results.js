import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Restart from '../atoms/RestartButton';
import PropTypes from 'prop-types';

const ResultsWrap = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin: 0 auto 5rem;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 2rem 3rem 5rem;
  position: relative;
`;

const ResultsTitle = styled.h2`
  font-size: 5vw;
  font-family: ${props => props.theme.fontPrimary};
  margin-top: 1rem;
`;

const ResultsSubtitle = styled.h4`
  color: #999;
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 5rem;

  strong {
    color: ${props => props.theme.pPrimary};
    font-family: ${props => props.theme.fontPrimary};
    font-weight: normal;
    font-size: 0.9rem;
    letter-spacing: 0;
  }
`;

const ResultIntro = styled.p`
  color: ${props => props.theme.tertiary};
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 5rem;
`;

const ResultsText = styled.p`
  font-size: 1.15rem;
  line-height: 1.65;
  margin: 2rem 2rem 3rem;

  strong {
    font-family: ${props => props.theme.fontPrimary};
    letter-spacing: 0;
  }
`;

const HR = styled.hr`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin: 2rem 0;
`;

const More = styled(Link)`
  background: ${props => props.theme.primary};
  border: 0;
  color: ${props => props.theme.bg};
  display: inline-block;
  font-family: ${props => props.theme.fontPrimary};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  padding: 1rem 3rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 2;
  }

  &[disabled],
  &[disabled]:hover {
    background: ${props => props.theme.primary};
    cursor: not-allowed;
    opacity: 0.5;

    &::after,
    &::before {
      display: none;
    }
  }
  
  &::before {
    background: ${props => props.theme.secondary};
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

const IMG = styled.img`
  height: 400px;
  max-width: 100%;
`;


export default function Results(props) {

  return (
    <ResultsWrap style={{display: props.show ? 'block' : 'none'}}>
      <ResultIntro>You are a:</ResultIntro>
      <ResultsTitle>
        {props.title}
      </ResultsTitle>
      <IMG src={`images/SVG/${props.moreLink}.svg`} alt={props.title} />
      <ResultsSubtitle>
        You mostly identify with: <strong>{props.resultArray}</strong>
      </ResultsSubtitle>
      <ResultsText>
        <span dangerouslySetInnerHTML={{__html: props.text}} />
      </ResultsText>      
      <More to={`design-personality/${props.moreLink}`}><span>Learn More</span></More>
      <HR />   
      <Restart restartText={props.nextText} onClick={props.handleRestart} />
    </ResultsWrap>
  );
}

Results.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  round: PropTypes.number.isRequired,
}
