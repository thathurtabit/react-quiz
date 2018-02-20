import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IntroTextWrap = styled.section`
  margin: 0 auto 10px;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 0 20px;
`

const IntroText = styled.p`
  font-size: 0.6em;
  line-height: 1;
  margin: 0.5rem 0 1rem;
  text-align: center;
`

const IntroQuestion = styled.h2`
  font-size: 1.75rem;
  text-align: center;
`

export default function Intro(props) {
  return (
	  <IntroTextWrap style={{ display: props.display ? 'block' : 'none' }}>
	  	<IntroText>{props.introText}</IntroText>
	  	<IntroQuestion>{props.intro2Text}</IntroQuestion>
  	</IntroTextWrap>
  )
}

Intro.propTypes = {
  introText: PropTypes.string.isRequired
}
