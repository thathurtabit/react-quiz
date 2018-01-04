import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import update from 'immutability-helper';
import quizData from '../../api/quizData';
import Header from '../molecules/Header';
import Intro from '../atoms/Intro';
import AnswerChoices from '../organisms/AnswerChoices';
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


// Create App class
export default class App extends Component {

  // State constructor
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      question: quizData[0].question,
      questionIntro: quizData[0].intro,
      answer1Choices: [],
      answer2Choices: [],
      answer3Choices: [],
      answer4Choices: [],
      answer5Choices: [],
      answersCount: {
        diverge: 0,
        converge: 0,
        abstract: 0,
        real: 0,
        group: 0,
        individual: 0,
        sense: 0,
        measure: 0,
      },
      index: 0,
      round: 1,
      roundsTotal: quizData.length,
      next: {
        text: "Next",
        disabled: true,
      },
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // React Lifecycle
  componentDidMount() {
    
    // Shuffle Answers
    const shuffledAnswer1Choices = quizData.map((round) => this.shuffleArray(round.answer1));
    const shuffledAnswer2Choices = quizData.map((round) => this.shuffleArray(round.answer2));
    const shuffledAnswer3Choices = quizData.map((round) => this.shuffleArray(round.answer3));
    const shuffledAnswer4Choices = quizData.map((round) => this.shuffleArray(round.answer4));
    const shuffledAnswer5Choices = quizData.map((round) => this.shuffleArray(round.answer5));


    this.setState({
      answer1Choices: shuffledAnswer1Choices[0],
      answer2Choices: shuffledAnswer2Choices[0],
      answer3Choices: shuffledAnswer3Choices[0],
      answer4Choices: shuffledAnswer4Choices[0],
      answer5Choices: shuffledAnswer5Choices[0],
    });

    // Transition In (first page load)
    setTimeout(() => {
      this.setState({
        show: !this.state.show,
      });
    }, duration);
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

  // Handle Answer Selected
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });

    console.log(this.state.answersCount);
  }

  // Next button
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
            answer1Choices: quizData[currentIndex].answer1,
            answer2Choices: quizData[currentIndex].answer2,
            answer3Choices: quizData[currentIndex].answer3,
            answer4Choices: quizData[currentIndex].answer4,
            answer5Choices: quizData[currentIndex].answer5,
            index: currentIndex,
            round: currentRound,
            next: {
              text: "Next"
            },
          });

        }, duration);
      }, duration);

    } else {
       // Transition Out
      setTimeout(() => {
        this.setState({ show: !this.state.show });
        // Transition In
        setTimeout(() => {

          this.setState({
            // Transition Out
            show: !this.state.show,
            question: "Result:",
            questionIntro: "Dunno Bruv",
            index: -1,
            round: 0,
            next: {
              text: "Restart?"
            },
          });

        }, duration);
      }, duration);
    }
  }


  // Render
  render() {

    return (
      <Fade in={this.state.show}>
        <Quiz>
          <Header question={this.state.question} round={this.state.round} />
          <Intro introText={this.state.questionIntro} />
          <hr />
          <AnswerChoices
            answer={this.state.answer}
            answerChoices={this.state.answer1Choices}
            roundTotal={this.state.roundsTotal}
            onAnswerSelected={this.handleAnswerSelected}
          />
          <AnswerChoices
            answer={this.state.answer}
            answerChoices={this.state.answer2Choices}
            roundTotal={this.state.roundsTotal}
            onAnswerSelected={this.handleAnswerSelected}
          />
          <AnswerChoices
            answer={this.state.answer}
            answerChoices={this.state.answer3Choices}
            roundTotal={this.state.roundsTotal}
            onAnswerSelected={this.handleAnswerSelected}
          />
          <AnswerChoices
            answer={this.state.answer}
            answerChoices={this.state.answer4Choices}
            roundTotal={this.state.roundsTotal}
            onAnswerSelected={this.handleAnswerSelected}
          />
          <AnswerChoices
            answer={this.state.answer}
            answerChoices={this.state.answer5Choices}
            roundTotal={this.state.roundsTotal}
            onAnswerSelected={this.handleAnswerSelected}
          />
          <hr />
          <Next nextText={this.state.next.text} disabled={this.state.next.disabled} onClick={() => this.jumpTo(this.state.index)} />
        </Quiz>
      </Fade>
    );
  }
}

