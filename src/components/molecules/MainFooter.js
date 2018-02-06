import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FooterWrap = styled.footer`
  background: #8E26B7;
  color: #d8ade8;
  display: flex;
  font-size: 0.75rem;
  font-family: 'Open Sans', serif;
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

const Col = styled.section`
  
`;

export default function QuestionHeader(props)  {

  const Copyright = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return <p><span dangerouslySetInnerHTML={{__html: '&copy;'}} /> {currentYear} Made with Computerlove</p>
  }

	return (
		<FooterWrap>
     <Col>
      <Copyright />
     </Col>
		</FooterWrap>
	);
}

