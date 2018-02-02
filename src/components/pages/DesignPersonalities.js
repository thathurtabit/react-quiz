import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import resultData from '../../api/resultData';

const PageWrap = styled.section`
	position: relative;
	max-width: 780px;
	margin: 0 auto;
`;

const PageTitle = styled.h1`
	color: #8E26B7;
	font-family: 'Merriweather', serif;
	font-size: 60px;
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

const More = styled(Link)`
  background: #8E26B7;
  border: 0;
  color: #fff;
  display: inline-block;
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


const ListPersonalities = () => {
	let personalityKeys = Object.keys(resultData);
	
  let linkList = personalityKeys.map(function(key){
    return (
    	<More key={key} to={`design-personality/${resultData[key].slug}`}><span>Learn More</span>
    		<li key={key}>{resultData[key].title}</li>    		
			</More>
    )
  })

  return  <ul>{ linkList  }</ul>
}


const DesignPersonalities = () => {

	return (
	 <PageWrap>
	 	<PageTitle>Design Personalities</PageTitle>
	 	<PageIntro><strong>List of Design Personalities:</strong></PageIntro>
	 	<PageIntro>Get 'em while they're hot.</PageIntro>
	 	
	 	<ListPersonalities />
	 	
	 </PageWrap>
	);
}

export default DesignPersonalities;