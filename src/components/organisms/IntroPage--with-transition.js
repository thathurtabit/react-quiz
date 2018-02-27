import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import Next from "../atoms/NextButton";

const IntroWrap = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 15rem 1rem 5rem;
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    padding: 20rem 3rem 5rem;
  }

  &::before {
    background-size: contain;
    background: url(../images/SVG/experimenter.svg) no-repeat center top;
    content: "";
    height: 15%;
    left: 0;
    opacity: 0.9;
    position: absolute;
    right: 0;
    top: 7%;
    transform: translateX(-3%);
    z-index: -1;

    @media screen and (min-width: ${props => props.theme.breakpointSM}) {
      height: 200px;
      top: 10%;
    }
  }
`;

const IntroSubtitle = styled.h2`
  font-size: calc(15vw);
  font-family: ${props => props.theme.fontPrimary};
  margin-bottom: 3rem;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    font-size: calc(50px + 3.75vw);
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    font-size: calc(50px + 3vw);
  }
`;

const IntroText = styled.p`
  font-size: calc(1rem + 0.25vw);
  line-height: 1.65;
  margin: 1rem 1rem 2.5rem;
  padding: 0;

  strong {
    font-family: ${props => props.theme.fontPrimary};
    font-weight: normal;
  }
`;

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  opacity: 0,
  display: "inline-block"
};

const transitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
};

const TransitionCustom = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default class IntroPage extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    setTimeout(() => {
      this.setState({
        show: !this.state.show
      });
    }, 1);
  }

  render() {
    return (
      <IntroWrap style={{ display: this.props.display ? "block" : "none" }}>
        <TransitionCustom in={this.state.show}>
          <IntroSubtitle>{this.props.content.p1}</IntroSubtitle>
          <IntroText>
            <span dangerouslySetInnerHTML={{ __html: this.props.content.p2 }} />
          </IntroText>
          <IntroText>
            <span dangerouslySetInnerHTML={{ __html: this.props.content.p3 }} />
          </IntroText>
          <Next
            nextText={this.props.nextText}
            round={this.props.round}
            onClick={this.props.onClick}
          />
        </TransitionCustom>
      </IntroWrap>
    );
  }
}

IntroPage.propTypes = {
  display: PropTypes.bool.isRequired,
  round: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  nextText: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired
};
