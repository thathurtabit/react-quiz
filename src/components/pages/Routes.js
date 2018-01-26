
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Quiz from '../pages/Quiz';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Wrapper = styled.section`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.3em;
  text-align: center;
  color: palevioletred;

  &.fade-enter {
  	position: absolute;
    opacity: 0.01;
    transform: scale(.98);
    width: 100%;
    top: 0;
  }

  &.fade-enter.fade-enter-active {

    opacity: 1;
    transition: opacity 300ms ease-out;
    transform: scale(1);
  }

  &.fade-exit {
  	position: absolute;
  	width: 100%;
    top: 0;
    opacity: 1;
    transform: scale(1);
  }

  &.fade-exit.fade-exit-active {
  	position: absolute;
    opacity: 0.01;
    transform: scale(.98);
    transition: opacity 350ms ease-in, transform 350ms ease-out;
  }
`;

const PageWrap = styled.section`
	position: relative;
`;

const LayoutWrap = styled.section`
	background: black;
	position: absolute;
	width: 100%;
  top: 100px;
  bottom: 0;
`;

const MainHeader = styled.section`
	background: white;
	position: fixed;
	width: 100%;
  top: 0;
`;


const TakeTheQuiz = () => (
  <Quiz />
)

const DesignPersonalities = () => (
  <PageWrap>
    <h2>Design Personalities</h2>
  </PageWrap>
)

const NotFound = () => (
  <PageWrap>
    <h2>404</h2>
  </PageWrap>
)


const PageFade = (props) => (
  <CSSTransition 
    {...props}
    classNames="fade"
    timeout={1000}
  />
)

const Layout = ({ children }) => (
  <LayoutWrap>
    <MainHeader>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/design-personalities">Personalities</Link></li>
      </ul>
    </MainHeader>
    {children}
  </LayoutWrap>
)

const SetUpRoutes = (props) => {
  const locationKey = props.location.pathname

  return (
  <Layout>
    <TransitionGroup>
      <PageFade key={locationKey}>
        <Wrapper>
          <Switch location={props.location}>
            <Route exact path="/" component={TakeTheQuiz} />
            <Route exact path="/design-personalities" component={DesignPersonalities} />
            <Route component={NotFound} />
          </Switch>
        </Wrapper>
      </PageFade>
    </TransitionGroup>
  </Layout>
  )
}

const SiteRoutes = () => (
  <Router>
    <Route path="/" component={SetUpRoutes} />
  </Router>
);

export default SiteRoutes