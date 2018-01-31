import React from 'react';
import styled from 'styled-components';
import RoundTitle from '../atoms/RoundTitle';
import PropTypes from 'prop-types';

const QuestionHeaderWrap = styled.section`
  background: #8E26B7;
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  margin: 0 0 1rem;
  padding: 1rem;
  position: relative;
  text-align: left;
  &::after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #8E26B7;
    border-width: 20px;
    margin-left: -20px;
  }
`;

const Round = styled.p`
  background: rgba(0,0,0,0.25);
  border-radius: 15px;
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  margin: 0 0 1rem;
  padding: 5px 10px;
  text-align: center;
`;

const QuestionTitle = styled.h3`
  font-family: 'Merriweather', serif;
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;

const QuestionIntro = styled.p`
  font-size: 1rem;
  line-height: 2;

  strong {
    text-transform: uppercase;
  }
`;

const Col = styled.section`
  width: 40%;
  padding: 2rem;
`;

const ColTitle = styled.section`
  width: 40%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;


export default function QuestionHeader(props)  {
	return (
		<QuestionHeaderWrap>
      <ColTitle>
        <Round style={{display: props.showRound ? 'inline-block' : 'none'}}>Round: {props.round} of {props.roundsTotal}</Round>
        <QuestionTitle>
          {props.title}
        </QuestionTitle>
      </ColTitle>
      <Col>        
        <QuestionIntro>
          <span dangerouslySetInnerHTML={{__html: props.intro}} />
        </QuestionIntro>
      </Col>
		</QuestionHeaderWrap>
	);
}

QuestionHeader.propTypes = {
  mainTitle: PropTypes.string,
  round: PropTypes.number,
  roundTotal: PropTypes.number,
  question: PropTypes.string,
}
