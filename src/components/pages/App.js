import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import update from 'immutability-helper';
import quizData from '../../api/quizData';
import resultData from '../../api/resultData';
import Header from '../molecules/Header';
import Intro from '../atoms/Intro';
import AnswerChoices from '../organisms/AnswerChoices';
import Next from '../atoms/NextButton';
import Results from '../organisms/Results';

const Wrapper = styled.section`
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

const Quiz = styled.section`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Answers = styled.section`
  background: rgba(0,0,0,0.025);
  padding: 3rem 5rem;
  margin: 3rem 0;
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

// Set my initial state
const initialState = {
  show: false,
  display: {
    quiz: true,
    result: false,
  },
  question: quizData[0].question,
  questionIntro: quizData[0].intro,
  answer1Choices: [],
  answer2Choices: [],
  answer3Choices: [],
  answer4Choices: [],
  answer5Choices: [],
  currentAnswers: [],
  selected: {
    group1: false,
    group2: false,
    group3: false,
    group4: false,
    group5: false,
  },
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
  results: {
    title: resultData.DAIS.title,
    text: resultData.DAIS.text,
  }
};

// Create App class
export default class App extends Component {

  // State constructor
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // React Lifecycle
  componentWillMount() {
    
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

  checkNextButton() { 
    this.setState({
      next: {
        text: "Next",
        disabled: false,
      }      
    });
  }

  // Handle Answer Selected
  handleAnswerSelected(event) {
    // Use spread operator to return an array of elements
    // Get array of radio inside UL
    let currentAnswersArray = [...event.currentTarget.querySelectorAll('input[type=radio]')];
    let selectedAnswerValueATotal = 0; // Current selected radiobutton value
    let selectedAnswerValueBTotal = 0; // Current selected radiobutton value
    let currentAnswerValueArray = [];
    let totalSelected = 0; // Total selected
    let currentAnswerValueA = '';
    let currentAnswerValueB = '';
    
    // Loop through and get values of the row of LIs
    for(let i = 0; i < 2; i++) {
      currentAnswerValueArray.push(currentAnswersArray[i].value);
    }

    currentAnswerValueA = currentAnswerValueArray[0];
    currentAnswerValueB = currentAnswerValueArray[1];
    
    // After SetState has happened...
    // Check which radio input which is currently :checked
    for(let i = 0; i < currentAnswersArray.length; i++) {
      if (currentAnswersArray[i].checked) {
        if (currentAnswersArray[i].value === currentAnswerValueA) {
          selectedAnswerValueATotal += 1;
        } else if (currentAnswersArray[i].value === currentAnswerValueB) {
          selectedAnswerValueBTotal += 1;
        }
      }
      totalSelected = selectedAnswerValueATotal + selectedAnswerValueBTotal; // Total selected
    }
  
    // If the total selected is the same as the total questions...
    if (totalSelected === currentAnswersArray.length / 2) {
      // Check which value got the most votes
      if (selectedAnswerValueATotal > selectedAnswerValueBTotal) {
        this.setUserAnswer(currentAnswerValueA, currentAnswerValueB);
      } else {
        this.setUserAnswer(currentAnswerValueB, currentAnswerValueA);
      }
    }

    console.log(`currentAnswerValueArray: ${currentAnswerValueArray} | value a: ${currentAnswerValueA} | value b: ${currentAnswerValueB}`);
    console.log(`TotalSelected: ${totalSelected} | selectedAnswerValueATotal: ${selectedAnswerValueATotal} | selectedAnswerValueBTotal: ${selectedAnswerValueBTotal} `);
     


  }

    // Set User Answer
  setUserAnswer(selectedAnswer, unselectedAnswer) {
   
    const updatedSelectedAnswersCount = update(this.state.answersCount, {
      [selectedAnswer]: {$set: 1},
      [unselectedAnswer]: {$set: 0},
    });

    this.setState({
        answersCount: updatedSelectedAnswersCount,
        answer: selectedAnswer
    }, () => {
      console.log(this.state.answersCount);
      this.checkNextButton(); // Check if we're ok to go to the next section
    });

  }

  // Set User Answer
  setAnswerSelected(groupSelected) {
   
    const updatedGroupSelected = update(this.state.selected, {
      [groupSelected]: {$set: true}
    });

    this.setState({
        selected: updatedGroupSelected,
    }, () => {
      console.log(this.state.selected);
    });
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
            selected: {
              group1: false,
              group2: false,
              group3: false,
              group4: false,
              group5: false,
            },
            index: currentIndex,
            round: currentRound,
            next: {
              text: "Next",
              disabled: true,
            },
          });

          this.unSelectAnswers();

        }, duration);
      }, duration);

    // You've reached the results page
    } else {
       // Transition Out
      setTimeout(() => {
        this.setState({
          show: !this.state.show,
      });
        // Transition In
        setTimeout(() => {
          this.setState({
            // Transition Out
            show: !this.state.show,
            display: {
              quiz: false,
              result: true,
            },         
          });
        }, duration);
      }, duration);
    }
  }

  // Unselect answers
  unSelectAnswers() {
    // Use spread operator to return an array of elements
    let selectedAnswers = [...document.querySelectorAll('input[type=radio]')];
  
    // Loop through array and uncheck answers
    for(let i = 0; i < selectedAnswers.length; i++) {
        selectedAnswers[i].checked = false;
    }
  }

  // Handle Restart
  handleReset = () => {

    // Shuffle Answers
    const shuffledAnswer1Choices = quizData.map((round) => this.shuffleArray(round.answer1));
    const shuffledAnswer2Choices = quizData.map((round) => this.shuffleArray(round.answer2));
    const shuffledAnswer3Choices = quizData.map((round) => this.shuffleArray(round.answer3));
    const shuffledAnswer4Choices = quizData.map((round) => this.shuffleArray(round.answer4));
    const shuffledAnswer5Choices = quizData.map((round) => this.shuffleArray(round.answer5));

    // Reset state
     // Transition Out
      setTimeout(() => {
        this.setState({ show: !this.state.show });
        // Transition In
        setTimeout(() => {

          this.setState({
           show: !this.state.show,
            display: {
              quiz: true,
              result: false,
            },
            question: quizData[0].question,
            questionIntro: quizData[0].intro,
            selected: {
              group1: false,
              group2: false,
              group3: false,
              group4: false,
              group5: false,
            },
            answer1Choices: shuffledAnswer1Choices[0],
            answer2Choices: shuffledAnswer2Choices[0],
            answer3Choices: shuffledAnswer3Choices[0],
            answer4Choices: shuffledAnswer4Choices[0],
            answer5Choices: shuffledAnswer5Choices[0],
            currentAnswers: [],
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
            next: {
              text: "Next",
              disabled: true,
            },
            results: {
              title: resultData.DAIS.title,
              text: resultData.DAIS.text,
            }
          }, () => {
            // Unselect answers
            this.unSelectAnswers();
          });

        }, duration);
      }, duration);
  }

  // Render
  render() {

    return (
      <Fade in={this.state.show}>
        <Wrapper>
          <Quiz style={{display: this.state.display.quiz ? 'block' : 'none'}}>
            <Header question={this.state.question} round={this.state.round} />
            <Intro introText={this.state.questionIntro} />
            <Answers onChange={this.handleAnswerSelected}>
              <AnswerChoices
                answer={this.state.answer}
                answerChoices={this.state.answer1Choices}
              />
              <AnswerChoices
                answer={this.state.answer}
                answerChoices={this.state.answer2Choices}
              />
              <AnswerChoices
                answer={this.state.answer}
                answerChoices={this.state.answer3Choices}
              />
              <AnswerChoices
                answer={this.state.answer}
                answerChoices={this.state.answer4Choices}
              />
              <AnswerChoices
                answer={this.state.answer}
                answerChoices={this.state.answer5Choices}
              />
            </Answers>
            <Next nextText={this.state.next.text} disabled={this.state.next.disabled} onClick={() => this.jumpTo(this.state.index)} />
          </Quiz>

          <Results
            show={this.state.display.result}
            nextText="Restart"
            title={this.state.results.title}
            text={this.state.results.text}
            disabled={this.state.display.result}
            handleRestart={this.handleReset}
          />          

        </Wrapper>
      </Fade>
    );
  }
}

