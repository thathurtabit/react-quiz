
import React from 'react';
import { HashRouter as Router, Route, Redirect, NavLink, Link, Switch} from 'react-router-dom';
import ScrollToTop from '../../helpers/ScrollToTop'
import styled from 'styled-components';
import resultData from '../../api/resultData';
import siteInfo from '../../api/siteInfo';
import DesignPersonalities from '../pages/DesignPersonalities';
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
	max-width: 780px;
	margin: 0 auto 10rem;
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
	font-size: 1.2rem;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;

	a {
		text-decoration: none;
		color: #8E26B7;
	}
	
	a:active,
	a:hover {
		color: #333;
	}
`;

const PageTitle = styled.h1`
	color: #8E26B7;
	font-family: 'Merriweather', serif;
	font-size: 60px;
	margin-top: 1rem;
`;

const PageTitleIntro = styled.p`
  color: #999;
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 5rem;
`;

const PageIntro = styled.p`
  font-size: 1.15rem;
  line-height: 1.65;
  margin: 2rem 2rem 3rem;

  strong {
    font-family: Merriweather;
    font-weight: normal;
  }
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

const IMG = styled.img`
	height: 400px;
	max-width: 100%;
`;

const NextButton = styled(Link)`
  background: #8E26B7;
  border: 0;
  color: #fff;
  font-family: 'Merriweather', serif;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  padding: 1rem 3rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 2;
  }

  &[disabled],
  &[disabled]:hover {
  	background: #8E26B7;
  	cursor: not-allowed;
  	opacity: 0.5;

    &::after,
    &::before {
      display: none;
    }
  }
  
  &::before {
    background: #333;
    bottom: 0;
    content: '';
    left: 0;
    perspective: 1000px;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotateY(90deg);
    transition: transform 0.25s ease-out, opacity 0.25s ease-out;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
    cursor: pointer;
    transform: rotateY(0deg);
  }
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

		&:active,
		&:hover {
			color: #333;
		}
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
    color: #333;
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

const DesignPersonality = (props) => (
  <PageWrap>
    <PageTitleIntro>Design Personality</PageTitleIntro>
    <PageTitle>{resultData[props.dataKey].title}</PageTitle>
    <IMG src={`images/SVG/${resultData[props.dataKey].slug}.svg`} alt={resultData[props.dataKey].title} />
    <PageIntro dangerouslySetInnerHTML={{__html: resultData[props.dataKey].text}} />

    <PageTitleIntro>Are you a {resultData[props.dataKey].title}?</PageTitleIntro>
    <p><NextButton to={siteInfo.mainNav[0].slug} activeClassName="active"><span>{siteInfo.mainNav[0].name}</span></NextButton></p>

  </PageWrap>
);


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
    	<SiteName><Link to={siteInfo.mainNav[0].slug}>{siteInfo.title}</Link></SiteName>    
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
  const locationKey = props.location.pathname;
  const path = '/design-personality';

  return (
  <Layout>
    <TransitionGroup>
      <PageFade key={locationKey}>
        <Wrapper>
          <Switch location={props.location}>
          	<Route exact path="/" component={() => <Redirect to="/quiz" />}/>
            <Route exact path="/quiz" component={TakeTheQuiz} />
            <Route exact path="/design-personalities" component={DesignPersonalities} />

            <Route path={`${path}/people-watcher`} render={(props) => <DesignPersonality dataKey="DAIS" {...props} />} />
            <Route exact path={`${path}/party-animal`} render={(props) => <DesignPersonality dataKey="DAGS" {...props} />} />
            <Route exact path={`${path}/number-cruncher`} render={(props) => <DesignPersonality dataKey="DAIM" {...props} />} />
            <Route exact path={`${path}/prototyper`} render={(props) => <DesignPersonality dataKey="DRIS" {...props} />} />
            <Route exact path={`${path}/workshop-warrior`} render={(props) => <DesignPersonality dataKey="DRGS" {...props} />} />
            <Route exact path={`${path}/fortune-teller`} render={(props) => <DesignPersonality dataKey="DAGM" {...props} />} />
            <Route exact path={`${path}/data-driver`} render={(props) => <DesignPersonality dataKey="DRGM" {...props} />} /> 
            <Route exact path={`${path}/experimenter`} render={(props) => <DesignPersonality dataKey="DRIM" {...props} />} />
            <Route exact path={`${path}/planner`}  render={(props) => <DesignPersonality dataKey="CAIM" {...props} />} />
            <Route exact path={`${path}/conductor`} render={(props) => <DesignPersonality dataKey="CAGM" {...props} />} />
            <Route exact path={`${path}/team-player`} render={(props) => <DesignPersonality dataKey="CRGM"{...props} />} />
            <Route exact path={`${path}/perfectionist`} render={(props) => <DesignPersonality dataKey="CRIM"{...props} />} />
            <Route exact path={`${path}/brand-builder`} render={(props) => <DesignPersonality dataKey="CAIS"{...props} />} />
            <Route exact path={`${path}/visionary`} render={(props) => <DesignPersonality dataKey="CAGS"{...props} />} />
            <Route exact path={`${path}/user-champion`} render={(props) => <DesignPersonality dataKey="CRGS"{...props} />} />
            <Route exact path={`${path}/painter`} render={(props) => <DesignPersonality dataKey="CRIS"{...props} />} />
            
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
