import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionHeaderWrap = styled.section`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.bg};
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 4rem 0 3rem;
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

  span {
    text-transform: uppercase;
  }
`;

const QuestionTitle = styled.h3`
  font-family: ${props => props.theme.fontPrimary};
  font-size: calc(1.7rem + 1vw);
  padding: 0;
  margin: 0;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    font-size: 3.5rem;
    padding: 0;
  }
`;

const transition = `
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;
`;

const SectionInfoTitle = styled.h4`
  font-family: ${props => props.theme.fontPrimary};
  margin: 3rem 0 0;
  padding: 0;
  ${transition}
`;

const QuestionIntro = styled.p`
  font-size: 0.9rem;
  line-height: 1.75;
  padding: 0 2rem 2rem;
  ${transition}

  strong {
    font-family: ${props => props.theme.fontPrimary};
  }

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    font-size: 1rem;
    line-height: 2;
  }
`;

const SectionInfo = styled.section`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  margin: 0 1rem;
  max-height: 0;
  overflow: hidden;
  padding: 0 1rem;
  position: relative;
  top: -12px;
  transition: max-height 0.5s ease-out;

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    margin: 0 auto;
    max-width: 600px;
  }

  &.show-info {
    max-height: 600px;
    > * {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.15s;
    }
    > p {
      transition-delay: 0.2s;
    }
  }
`;

const SectionTitle = styled.section`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoButton = styled.button`
  background: ${props => props.theme.bg};
  border-radius: 100%;
  border: 0;
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.fontPrimary};
  font-size: 1rem;
  height: 25px;
  line-height: 25px;
  margin: 1.75rem 2rem 0;
  position: relative;
  transition: background 0.25s ease-out, color 0.25s ease-out, transform 0.25s ease-out;
  transform: scale(1);
  width: 25px;
  z-index: 2;

  &:hover {
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.bg};
    cursor: pointer;
    transform: scale(1.2);
  }
`;


export default class QuestionHeader extends Component  {
  
  // State constructor
  constructor(props) {
    super(props);
    this.state = {
      display: {
        info: false
      }
    }
    // This binding is necessary to make `this` work in the callback
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      display: {
        info: false
      }
    })
  }

  toggleInfo() {
    this.setState(prevState => ({
      display: {
        info: !prevState.display.info
      } 
    }))
  }

  render() {
  	return (
  		<QuestionHeaderWrap>
        <SectionTitle>
          <Round style={{display: this.props.showRound ? 'inline-block' : 'none'}}>Round: {this.props.round} of {this.props.roundsTotal}</Round>
          <QuestionTitle>
            {this.props.question}
          </QuestionTitle>
          <InfoButton onClick={this.toggleInfo} title="More / Less Info" tabIndex="0">i</InfoButton>
        </SectionTitle>
        <SectionInfo className={this.state.display.info ? 'show-info' : null} > 
          <SectionInfoTitle>{this.props.title}</SectionInfoTitle>       
          <QuestionIntro dangerouslySetInnerHTML={{__html: this.props.intro}} />
        </SectionInfo>
  		</QuestionHeaderWrap>
  	);
  }
}

QuestionHeader.propTypes = {
  mainTitle: PropTypes.string,
  round: PropTypes.number,
  roundTotal: PropTypes.number,
}
