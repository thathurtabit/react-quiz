import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import quizData from '../../api/quizData';
import Header from '../molecules/Header';
import Intro from '../atoms/Intro';
import Next from '../atoms/NextButton';

const Quiz = styled.section`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-out;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

const duration = 300;

// Fade handler
const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={duration}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      question: quizData[0].question,
      questionIntro: quizData[0].intro,
      index: 0,
      round: 1,
      roundsTotal: quizData.length,
      answers: '',
      next: {
        text: "Next"
      },
    };
  }

  jumpTo(index) {
    let currentIndex = index + 1;
    let currentRound = currentIndex + 1;

    // If there's still questions to ask...
    if (index < quizData.length - 1) {

      // Transition Out
      setTimeout(() => {
        this.setState({ show: !this.state.show });
        // Transition In
        setTimeout(() => {

          this.setState({
            // Transition Out
            show: !this.state.show,
            question: quizData[currentIndex].question,
            questionIntro: quizData[currentIndex].intro,
            index: currentIndex,
            round: currentRound,
            next: {
              text: "Next"
            },
          });

        }, duration);
      }, duration)

    } else {
       this.setState({
        question: "Result:",
        questionIntro: "Dunno bruv",
        index: -1,
        round: 0,
        next: {
          text: "Restart"
        },
      });
    }
  }

  // React Lifecycle
  componentWillMount() {
    
    // Shuffle Answers
    const shuffledAnswerOptions = quizData.map((question) => this.shuffleArray(question.answers));
    this.setState({
      answers: shuffledAnswerOptions[0],
    });

    console.log(shuffledAnswerOptions[0]);
  }

  // Shuffle an Array
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {

    return (
      <Fade in={this.state.show}>
        <Quiz>
          <Header question={this.state.question} round={this.state.round} />
          <Intro introText={this.state.questionIntro} />
          <hr />
          <hr />
          <Next nextText={this.state.next.text} onClick={() => this.jumpTo(this.state.index)} />
        </Quiz>
      </Fade>
    );
  }
}

