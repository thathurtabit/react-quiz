
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
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
	font-size: 1.75rem;
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
	}

	a {
		color: #8E26B7;
		padding: 10px 20px;
		font-size: 0.75rem;
		letter-spacing: 2px;
		text-decoration: none;
		text-transform: uppercase;
		transition: transform 0.25s ease-out; 
		transform: translateY(0);

		&:hover {
			transform: translateY(-5px);
		}

		&.active {
			background: rgba(0,0,0,0.05);
		}
	}
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
    	<SiteName>{siteInfo.title}</SiteName>    
	    	<MainNav>
		    	<ul>
		    		<li><NavLink to={siteInfo.mainNav[0].slug} activeClassName="active">{siteInfo.mainNav[0].name}</NavLink></li>
	    			<li><NavLink to={siteInfo.mainNav[1].slug} activeClassName="active">{siteInfo.mainNav[1].name}</NavLink></li>
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

// const SiteRoutes = () => (

// );

// export default SiteRoutes


export default class SiteRoutes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	  <Router>
			    <Route path="/" component={SetUpRoutes} />
			  </Router>
    );
  }
}
