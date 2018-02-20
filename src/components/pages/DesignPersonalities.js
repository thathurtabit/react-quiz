import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import resultData from '../../api/resultData';
import siteInfo from '../../api/siteInfo';

const PageWrap = styled.section`
	position: relative;
	margin: 0 2rem 5rem;
`;

const PageTitle = styled.h1`
	color: ${props => props.theme.primary};
	font-family: ${props => props.theme.fontPrimary};
	font-size: calc(10vw);

	@media screen and (min-width: ${props => props.theme.breakpointSM}) {
			font-size: calc(20px + 4vw);
	}
`;

// Grid fallback
const PersonalitiesUl = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	
	@media screen and (min-width: ${props => props.theme.breakpointSM}) {
		& > * {
		  float: left;  
		  width: 50%;
		}
		
		display: grid;
	  grid-template-columns: 1fr 1fr;
	  grid-gap: 20px;
	}

	@media screen and (min-width: ${props => props.theme.breakpointMD}) {
		& > * {
		  width: 33%;
		}
		
	  grid-template-columns: 1fr 1fr 1fr;
	}

	@media screen and (min-width: ${props => props.theme.breakpointXL}) {
		& > * {
		  width: 25%;
		}
		
	  grid-template-columns: 1fr 1fr 1fr 1fr;
	}

`;

const PersonalitiesLi = styled.li`
	list-style-type: none;
	width: 100%;
	
	h4 {
		font-family: ${props => props.theme.fontPrimary};
		font-size: 1rem;
		letter-spacing: 0.2rem;
	}

	p {
		color: ${props => props.theme.secondary};
		font-size: 0.85rem;
		letter-spacing: 0;
		max-height: 60px;
		overflow: hidden;
		text-transform: none;
		display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;  
	}

	button {
		background: ${props => props.theme.primary};
		border: 0;
		color: #fff;
		font-family: ${props => props.theme.fontPrimary};
		padding: 5px 10px;

		&:hover {
			background: ${props => props.theme.bg};
			color: ${props => props.theme.primary};
			cursor: pointer;
		}
	}
`;

const More = styled(Link)`
	background: rgba(255, 255, 255, 0);
  border: 0;
  border-radius: 20px;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0);
  color: ${props => props.theme.primary};
  display: block;
  margin: 0 auto;
  max-width: 300px;
  overflow: hidden;
  padding: 2rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: background, 0.25s ease-out, transform 0.25s ease-out, box-shadow 0.25s ease-out;

  span {
    position: relative;
    z-index: 2;
  }
  
  &:hover {
  	background: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    opacity: 1;
    transform: translateY(-3px);

    img {
    	transform: scale(1.025);
    }
  }
`;

const IMG = styled.img`
	height: 200px;
	max-width: 100%;
	transform: scale(1);
	transition: transform 0.25s ease-out;

	@media screen and (min-width: ${props => props.theme.breakpointXL}) {
		height: 175px;
	}
`;

const ListPersonalities = () => {
	let personalityKeys = Object.keys(resultData);
	
  let linkList = personalityKeys.map(function(key) {
    return (    	
  		<PersonalitiesLi key={key}>
    		<More key={key} to={`${siteInfo.singularType.slug}/${resultData[key].slug}`}>
    			<IMG src={`images/SVG/${resultData[key].slug}.svg`} alt={resultData[key].title} />
    			<h4>{resultData[key].title}</h4>
    			<p dangerouslySetInnerHTML={{__html: resultData[key].text}}></p>
    			<button>Learn More</button>
  			</More>
  		</PersonalitiesLi>			
    )
  })

  return  <PersonalitiesUl>{ linkList }</PersonalitiesUl>
}

const DesignPersonalities = () => {

	return (
	 <PageWrap>
	 	<PageTitle>{siteInfo.singularType.name}s</PageTitle>	 	
	 	<ListPersonalities />	 	
	 </PageWrap>
	);
}

export default DesignPersonalities;