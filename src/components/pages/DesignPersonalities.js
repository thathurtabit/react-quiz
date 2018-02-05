import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import resultData from '../../api/resultData';

const PageWrap = styled.section`
	position: relative;
	margin: 0 2rem;
`;

const PageTitle = styled.h1`
	color: #8E26B7;
	font-family: 'Merriweather', serif;
	font-size: 60px;
`;

// Grid fallback
const PersonalitiesUl = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	
	@media screen and (min-width: 480px) {
		& > * {
		  float: left;  
		  width: 33%;
		}
		
		display: grid;
	  grid-template-columns: 1fr 1fr;
	  grid-gap: 20px;
	}

	@media screen and (min-width: 860px) {
		& > * {
		  float: left;  
		  width: 50%;
		}
		
		display: grid;
	  grid-template-columns: 1fr 1fr 1fr;
	  grid-gap: 20px;
	}

`;

const PersonalitiesLi = styled.li`
	list-style-type: none;
	width: 100%;
	
	h4 {
		font-family: 'Merriweather', serif;
		font-size: 1rem;
		letter-spacing: 0.2rem;
	}

	p {
		color: #333;
		font-size: 0.85rem;
		letter-spacing: 0;
		overflow: hidden;
		text-transform: none;
		display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;  
	}

	button {
		background: #8E26B7;
		border: 0;
		color: #fff;
		font-family: 'Merriweather', serif;
		padding: 5px 10px;

		&:hover {
			background: #fff;
			color: #8E26B7;
			cursor: pointer;
		}
	}
`;

const More = styled(Link)`
  border: 0;
  color: #8E26B7;
  display: block;
  margin: 0 auto;
  max-width: 300px;
  overflow: hidden;
  padding: 2rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.25s ease-out;

  span {
    position: relative;
    z-index: 2;
  }
  
  &:hover {
  	background: rgba(0, 0, 0, 0.05);
    cursor: pointer;
    opacity: 1;
    transform: rotateY(0deg);
  }
`;

const IMG = styled.img`
	height: 200px;
`;


const ListPersonalities = () => {
	let personalityKeys = Object.keys(resultData);
	
  let linkList = personalityKeys.map(function(key) {
    return (    	
  		<PersonalitiesLi key={key}>
    		<More key={key} to={`design-personality/${resultData[key].slug}`}>
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
	 	<PageTitle>Design Personalities</PageTitle>
	 	
	 	<ListPersonalities />
	 	
	 </PageWrap>
	);
}

export default DesignPersonalities;