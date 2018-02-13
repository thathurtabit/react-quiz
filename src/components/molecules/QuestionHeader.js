import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionHeaderWrap = styled.section`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.bg};
  font-size: 1.5rem;
  margin: 0 0 1rem;
  padding: 1rem;
  position: relative;
  text-align: center;
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
    border-top-color: ${props => props.theme.primary};
    border-width: 20px;
    margin-left: -20px;
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    display: flex;
    text-align: left;
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
  font-family: ${props => props.theme.fontPrimary};
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
  padding: 0 1rem 1rem;

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    width: 40%;
    padding: 2rem;
  }
`;

const ColTitle = styled.section`
  padding: 2rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    align-items: flex-end;
    padding: 2rem;
    width: 40%;
  }
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
