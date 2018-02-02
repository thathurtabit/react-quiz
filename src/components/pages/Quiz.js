import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import update from 'immutability-helper';
import introPageData from '../../api/introPageData';
import quizData from '../../api/quizData';
import resultData from '../../api/resultData';
import QuestionHeader from '../molecules/QuestionHeader';
import Question from '../atoms/Question';
import IntroPage from '../organisms/IntroPage';
import AnswerChoices from '../organisms/AnswerChoices';
import Next from '../atoms/NextButton';
import Results from '../organisms/Results';

const Wrapper = styled.section`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  text-align: center;

  &.fade-enter {
    opacity: 0.01;
    transform: scale(.98);
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-out;
    transform: scale(1);
  }

  &.fade-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.fade-exit.fade-exit-active {
    opacity: 0.01;
    transform: scale(.98);
    transition: opacity 350ms ease-in, transform 350ms ease-out;
  }
`;

const QuizWrap = styled.section`
  padding: 0 0 3rem;
`;

const QuizSection = styled.section`
  font-size: 1.5em;
  text-align: center;
`;

const Answers = styled.section`
  background: rgba(0,0,0,0.05);
  padding: 2rem 0;
  margin: 1rem 0 3rem;
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
  show: true,
  display: {
    intro: true,
    quiz: false,
    result: false,
  },
  introPageContent: introPageData,
  question: quizData[0].question,
  questionTitle: quizData[0].title,
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
  currentPage: 0,
  index: -1,
  round: 1,
  roundsTotal: quizData.length,
  next: {
    text: "Start",
    disabled: false,
  },
  resultData: resultData,
  resultArray: [],
  resultAcronym: '',
  results: {
    title: '',
    text: '',
  }
};

// Create Quiz class
export default class Quiz extends Component {

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
  }

  // Shuffle an Array
  shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

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
    let currentPage = this.state.currentPage;
    let currentIndex = this.state.index;
    currentPage +=1; // increment
    currentIndex +=1; // increment

    // INTRO PAGE
    // If there's still questions to ask...
    if (currentPage === 1) {

      console.log(`CurrentPage: ${currentPage} | CurrentIndex: ${currentIndex}`);

      // Transition Out
      setTimeout(() => {
        this.setState({
          show: !this.state.show
        });
        // Transition In
        setTimeout(() => {

          window.scrollTo(0, 0);

          this.setState({
            // Transition Out
            show: !this.state.show,
            display: {
              intro: false,
              quiz: true,
              result: false,
            },
            index: currentIndex,
            currentPage: currentPage,
            next: {
              text: "Next",
              disabled: true,
            },
          });

          this.unSelectAnswers();

        }, duration);
      }, duration);

    // START QUIZ
    // If there's still questions to ask...
   } else if (currentPage > 1 && currentPage < this.state.roundsTotal + 1) {

      console.log(`CurrentPage: ${currentPage} | CurrentIndex: ${currentIndex}`);

      // Transition Out
      setTimeout(() => {
        this.setState({ show: !this.state.show });
        // Transition In
        setTimeout(() => {

          window.scrollTo(0, 0);

          this.setState({

            // Transition Out
            show: !this.state.show,
            question: quizData[currentIndex].question,
            questionTitle: quizData[currentIndex].title,
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
            currentPage: currentPage,
            round: currentPage,
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

        // Process Results
        this.processResults();

        // Transition In
        setTimeout(() => {

          window.scrollTo(0, 0);

          this.setState({
            // Transition Out
            show: !this.state.show,
            display: {
              intro: false,
              quiz: false,
              result: true,
            },
            questionIntro: 'Your are:',
          });
        }, duration);
      }, duration);
    }
  }


  // Process Results
  processResults() {
    let resultsObj = this.state.answersCount;
    let resultArray = [];
    let resultAcronym = '';

    // Loop over results object
    Object.keys(resultsObj).forEach(key => {
      if (resultsObj[key] > 0) {
        resultArray.push(`${key.charAt(0).toUpperCase() + key.slice(1)} `);
      }
    });

    // Create Acronym based on first letters to be referenced to resultsData.js     
    for (let i = 0; i < resultArray.length; i++) {
      resultAcronym += resultArray[i].charAt(0).toUpperCase();
    }
    
    this.setState({
      resultArray: resultArray,
      resultAcronym: resultAcronym,
      results: {
        title: resultData[resultAcronym].title,
        text: resultData[resultAcronym].text,
        link: resultData[resultAcronym].slug,
      },
    }, () => {
      console.log(`resultArray: ${this.state.resultArray} | resultAcronym: ${this.state.resultAcronym}`);
    });

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
              intro: true,
              quiz: false,
              result: false,
            },
            question: quizData[0].question,
            questionTitle: quizData[0].title,
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
            index: -1,
            currentPage: 0,
            round: 1,
            next: {
              text: "Next",
              disabled: true,
            },
            resultArray: '',
            resultAcronym: '',
            results: {
              title: '',
              text: '',
              link: '',
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
      <div>
        <Fade in={this.state.show}>
          <Wrapper>
            <IntroPage
              display={this.state.display.intro}
              title={this.state.mainTitle}
              content={this.state.introPageContent}
              nextText={this.state.next.text}
              round={this.state.round}
              onClick={() => this.jumpTo(this.state.index)}
            />
            <QuizWrap style={{display: this.state.display.quiz ? 'block' : 'none'}}>
              <QuestionHeader title={this.state.questionTitle} intro={this.state.questionIntro} showRound={this.state.display.quiz} round={this.state.round} roundsTotal={this.state.roundsTotal} />   
              <Question ready={this.state.show} question={this.state.question} />           
              <QuizSection>                
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
                <Next nextText={this.state.next.text} disabled={this.state.next.disabled} round={this.state.round} onClick={() => this.jumpTo(this.state.index)} />
              </QuizSection>
            </QuizWrap>

            <Results
              show={this.state.display.result}
              nextText="Restart"
              title={this.state.results.title}
              moreLink={this.state.results.link}
              text={this.state.results.text}
              resultArray={this.state.resultArray}
              disabled={this.state.display.result}
              round={this.state.round}
              handleRestart={this.handleReset}
            />     

          </Wrapper>
        </Fade>
      </div>
    );
  }
}

