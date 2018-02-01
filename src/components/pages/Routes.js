
import React from 'react';
import { HashRouter as Router, Route, Redirect, NavLink, Switch} from 'react-router-dom';
import ScrollToTop from '../../helpers/ScrollToTop'
import styled from 'styled-components';
import siteInfo from '../../api/siteInfo';
import Quiz from '../pages/Quiz';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Wrapper = styled.section`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
  text-align: center;
  min-height: 100%;
  position: relative;

  &.fade-enter {
  	position: relative;
    opacity: 0.01;
    transform: scale(.98);
    width: 100%;
    top: 0;
  }

  &.fade-enter.fade-enter-active {
		position: absolute;
    opacity: 1;
    transition: opacity 300ms ease-out;
    transform: scale(1);
  }

  &.fade-exit {
  	position: relative;
  	width: 100%;
    top: 0;
    opacity: 1;
    transform: scale(1);
  }

  &.fade-exit.fade-exit-active {
  	position: relative;
    opacity: 0.01;
    transform: scale(.98);
    transition: opacity 350ms ease-in, transform 350ms ease-out;
  }
`;

const PageWrap = styled.section`
	position: relative;
`;

const LayoutWrap = styled.section`
	position: absolute;
	width: 100%;
  bottom: 0;
  color: #8E26B7;
  top: 100px;
`;

const SiteName = styled.h1`
	color: #8E26B7;
	font-family: 'Merriweather', serif;
	font-size: 1.5rem;
`;

const PageTitle = styled.h1`
	color: #8E26B7;
	font-family: 'Merriweather', serif;
	font-size: 4vw;
`;

const MainHeader = styled.header`
	background: white;
	display: flex;
	justify-content: space-between;
	left: 0;
	padding: 1rem 2rem;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 2;
`;

const MainNav = styled.nav`
	font-family: 'Open Sans', sans-serif;
	display: flex;
  margin-left: auto;

  ul {
  	list-style-type: none;
  	display: flex;
  	flex-direction: row;
	}

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

    &:nth-child(even) a::after {
      border-radius: 100%;
    }
	}

	a {
		color: #8E26B7;
    position: relative;
		font-size: 0.75rem;
		letter-spacing: 2px;
		text-decoration: none;
		text-transform: uppercase;
	}

  a span {
    display: block;
    padding: 10px 20px;
    transition: transform 0.25s ease-out; 
    transform: translateY(0);
  }

  a:hover span {
    transform: translateY(-2px);
  }
  
  a:hover::after,
  a.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 10px;
  }

  a.active {
    background: rgba(0,0,0,0.02);
  }

  a::after {
    content: '';
    transition: transform 0.25s ease-out, width 0.25s ease-out;
    transform: translateX(-50%);
    position: absolute;
    width: 0;
    bottom: -5px;
    left: 50%;
    border-bottom: 10px solid #8E26B7;
  }
`;


const TakeTheQuiz = () => (
  <Quiz />
)

const DesignPersonalities = () => (
  <PageWrap>
    <PageTitle>Design Personalities</PageTitle>
    <p>List of Design Personality types (illustrations) linking to specific pages.</p>
  </PageWrap>
)

const NotFound = () => (
  <PageWrap>
    <PageTitle>404</PageTitle>
    <p>Page not found. ¯\_(ツ)_/¯</p>
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
    	<SiteName>{siteInfo.title}</SiteName>    
	    	<MainNav>
		    	<ul>
		    		<li><NavLink to={siteInfo.mainNav[0].slug} activeClassName="active"><span>{siteInfo.mainNav[0].name}</span></NavLink></li>
	    			<li><NavLink to={siteInfo.mainNav[1].slug} activeClassName="active"><span>{siteInfo.mainNav[1].name}</span></NavLink></li>
		    	</ul>
	    	</MainNav>
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
          	<Route exact path="/" component={() => <Redirect to="/quiz" />}/>
            <Route exact path="/quiz" component={TakeTheQuiz} />
            <Route exact path="/design-personalities" component={DesignPersonalities} />
            <Route component={NotFound} />
          </Switch>
        </Wrapper>
      </PageFade>
    </TransitionGroup>
  </Layout>
  )
}


const SiteRoutes = () => {
	return (
	<Router>
		<ScrollToTop>
			<Route path="/" component={SetUpRoutes} />
		</ScrollToTop>
	</Router>
	); 
}

export default SiteRoutes;
