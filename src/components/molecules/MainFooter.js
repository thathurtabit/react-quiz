import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.primaryLight};
  display: flex;
  font-size: 0.75rem;
  font-family: ${props => props.theme.fontSecondary};
  margin: 3rem 0 0;
  padding: 0.75rem;
  position: relative;

  @media screen and (min-width: 480px) {
    & > section {
      float: left;  
      width: 100%;
    }
    
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    text-align: center;
  } 
`;

const Link = styled.a`
  color: ${props => props.theme.primaryLight};
  text-decoration: none;
  transition: color 0.2s ease-out;

  &:hover {
    color: ${props => props.theme.bg};
  }
`;

export default function QuestionHeader(props)  {

  const Copyright = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return <p><span dangerouslySetInnerHTML={{__html: '&copy;'}} /> {currentYear} <Link href="https://www.codecomputerlove.com/" target="_blank">Made with Computerlove</Link></p>
  }

	return (
		<FooterWrap>
      <Copyright />
		</FooterWrap>
	);
}

