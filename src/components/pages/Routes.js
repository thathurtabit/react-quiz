
import React from 'react'
import { BrowserRouter, Route, NavLink, Link, Switch, } from 'react-router-dom'
import theme from '../../helpers/theme.js'
import ScrollToTop from '../../helpers/ScrollToTop'
import styled, { ThemeProvider, } from 'styled-components'
import IntroPage from '../organisms/IntroPage'
import DesignPersonality from '../pages/DesignPersonality'
import MainFooter from '../molecules/MainFooter'
import siteInfo from '../../api/siteInfo'
import DesignPersonalities from '../pages/DesignPersonalities'
import Quiz from '../pages/Quiz'
import { TransitionGroup, CSSTransition, } from 'react-transition-group'

const Wrapper = styled.section`
  font-family: ${props => props.theme.fontSecondary};
  font-size: 1.3rem;
  position: relative;
  text-align: center;
  top: 0;

  &.fade-enter {
    opacity: 0;
    top: 0;
    transform: translateY(-10px);
  }

  &.fade-enter.fade-enter-active {
  	opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease-out, transform 350ms ease-out;

    @media screen and (max-width: ${props => props.theme.breakpointSM}) {
    }
  }

  &.fade-exit {
  	opacity: 1;
  	transform: translateY(0);
    top: 0;
  }

  &.fade-exit.fade-exit-active {
  	opacity: 0;
  	transform: translateY(-10px);
    transition: opacity 350ms ease-in, transform 350ms ease-out;
  }
`

const PageWrap = styled.section`
	position: relative;
	max-width: ${props => props.theme.maxContentWidth};
	margin: ${props => props.extraSpacing ? '0 auto 10rem' : '0 auto 3rem'};
`

const LayoutWrap = styled.section`
  color: ${props => props.theme.primary};
  min-height: 100vh;

	@media screen and (min-width: ${props => props.theme.breakpointSM}) {
		position: absolute;
		width: 100%;
	  bottom: 0;
	  top: 100px;
	}
`

const SiteName = styled.h1`
	color: ${props => props.theme.primary};
	font-family: ${props => props.theme.fontPrimary};
	font-size: 1.1rem;
	margin: 20px 0 15px;
	text-align: center;
	
	@media screen and (min-width: ${props => props.theme.breakpointSM}) {
		display: flex;
		font-size: 1.2rem;
		flex-direction: column;
		justify-content: center;
		margin: 20px 0;
		text-align: left;
  }

	a {
		text-decoration: none;
		color: ${props => props.theme.primary};
	}
	
	a:active,
	a:hover {
		color: ${props => props.theme.secondary};
	}
`

const PageTitle = styled.h1`
	color: ${props => props.theme.primary};
	font-family: ${props => props.theme.fontPrimary};
	margin: 1rem 1rem 2rem;	
	font-size: calc(13vw);

	@media screen and (min-width: ${props => props.theme.breakpointSM}) {
			font-size: calc(20px + 5vw);
			margin: 1rem 1rem 4rem;	
	}
	
	@media screen and (min-width: ${props => props.theme.breakpointMD}) {
			font-size: calc(20px + 4vw);
			margin: 1rem 1rem 5rem;	
	}
`

const MainHeader = styled.header`
	background: white;
	left: 0;
	padding: 1rem;
	right: 0;
	text-align: center;
	top: 0;
	z-index: 2;
	
	@media screen and (min-width: ${props => props.theme.breakpointSM}) {
		display: flex;
		justify-content: space-between;
		max-height: initial;
		padding: 1rem 2rem;
		position: fixed;
		z-index: 11;
	}
`

const MainNav = styled.nav`
	font-family: ${props => props.theme.fontSecondary};
	display: flex;
  margin-left: auto;

  ul {
  	display: flex;
  	flex-direction: row;
  	list-style-type: none;
  	margin: 0;
  	padding: 0;
  	width: 100%;
	}

	li {
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: center;
		justify-content: center;

    &:nth-child(even) a::after {
      border-radius: 100%;
    }

    @media screen and (min-width: ${props => props.theme.breakpointSM}) {
			min-width: 160px;
    }
	}

	a {
		color: ${props => props.theme.primary};
    position: relative;
		font-size: 0.75rem;
		letter-spacing: 1px;
		text-decoration: none;
		text-transform: uppercase;

		@media screen and (min-width: ${props => props.theme.breakpointSM}) {
			letter-spacing: 2px;
		}

		&:active,
		&:hover {
			color: ${props => props.theme.secondary};
		}
	}

	a i {
		display: none;
		font-style: normal;

		@media screen and (min-width: ${props => props.theme.breakpointSM}) {
			display: inline-block;
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
    background: ${props => props.theme.bgTrans};
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
    border-bottom: 10px solid ${props => props.theme.primary};
  }
`


const NotFound = () => (
  <PageWrap>
    <PageTitle>404</PageTitle>
    <p>Page not found. ¯\_(ツ)_/¯</p>
  </PageWrap>
)

const PageFade = (props) => (
  <CSSTransition
    {...props}
    classNames='fade'
    timeout={1000}
  />
)

const Layout = ({ children, }) => (
  <LayoutWrap>
    <MainHeader>
    	<SiteName><Link to='/'>{siteInfo.title}</Link></SiteName>
	    	<MainNav>
		    	<ul>
		    		<li><NavLink to={siteInfo.mainNav[0].slug} activeClassName='active'><span dangerouslySetInnerHTML={{ __html: siteInfo.mainNav[0].name, }} /></NavLink></li>
	    			<li><NavLink to={siteInfo.mainNav[1].slug} activeClassName='active'><span dangerouslySetInnerHTML={{ __html: siteInfo.mainNav[1].name, }} /></NavLink></li>
		    	</ul>
	    	</MainNav>
    </MainHeader>
    {children}
    <MainFooter />
  </LayoutWrap>
)

const SetUpRoutes = (props) => {
  const locationKey = props.location.pathname
  const path = siteInfo.singularType.slug

  return (
	  <Layout>
	    <TransitionGroup>
	      <PageFade key={locationKey}>
	        <Wrapper>
	          <Switch location={props.location}>
	          	<Route exact path='/' component={IntroPage}/>
	            <Route exact path={siteInfo.mainNav[0].slug} component={Quiz} />
	            <Route exact path={siteInfo.mainNav[1].slug} component={DesignPersonalities} />

	            <Route path={`${path}/people-watcher`} render={() => <DesignPersonality dataKey='DAIS' {...props} />} />
	            <Route exact path={`${path}/party-animal`} render={() => <DesignPersonality dataKey='DAGS' {...props} />} />
	            <Route exact path={`${path}/number-cruncher`} render={() => <DesignPersonality dataKey='DAIM' {...props} />} />
	            <Route exact path={`${path}/prototyper`} render={() => <DesignPersonality dataKey='DRIS' {...props} />} />
	            <Route exact path={`${path}/workshop-warrior`} render={() => <DesignPersonality dataKey='DRGS' {...props} />} />
	            <Route exact path={`${path}/fortune-teller`} render={() => <DesignPersonality dataKey='DAGM' {...props} />} />
	            <Route exact path={`${path}/data-driver`} render={() => <DesignPersonality dataKey='DRGM' {...props} />} />
	            <Route exact path={`${path}/experimenter`} render={() => <DesignPersonality dataKey='DRIM' {...props} />} />
	            <Route exact path={`${path}/planner`} render={() => <DesignPersonality dataKey='CAIM' {...props} />} />
	            <Route exact path={`${path}/conductor`} render={() => <DesignPersonality dataKey='CAGM' {...props} />} />
	            <Route exact path={`${path}/team-player`} render={() => <DesignPersonality dataKey='CRGM'{...props} />} />
	            <Route exact path={`${path}/perfectionist`} render={() => <DesignPersonality dataKey='CRIM'{...props} />} />
	            <Route exact path={`${path}/brand-builder`} render={() => <DesignPersonality dataKey='CAIS'{...props} />} />
	            <Route exact path={`${path}/visionary`} render={() => <DesignPersonality dataKey='CAGS'{...props} />} />
	            <Route exact path={`${path}/user-champion`} render={() => <DesignPersonality dataKey='CRGS'{...props} />} />
	            <Route exact path={`${path}/painter`} render={() => <DesignPersonality dataKey='CRIS'{...props} />} />

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
    <BrowserRouter basename={'/'}	>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <Route path='/' component={SetUpRoutes} />
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default SiteRoutes
