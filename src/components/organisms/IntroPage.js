import React from 'react'
import styled from 'styled-components'
import QuizButton from '../atoms/QuizButton'
import SvgExperimenter from '../atoms/svgs/experimenter'
import { Link, } from 'react-router-dom'
import siteInfo from '../../api/siteInfo'
import introPageData from '../../api/introPageData'
import PropTypes from 'prop-types'

const IntroWrap = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 5rem 1rem 5rem;
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    padding: 5rem 3rem 5rem;
  }
`

const IntroSubtitle = styled.h2`
  font-size: calc(15vw);
  font-family: ${props => props.theme.fontPrimary};
  margin-bottom: 2rem;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    font-size: calc(50px + 3.75vw);
    margin-bottom: 3rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    font-size: calc(50px + 2vw);
  }
`

const IntroText = styled.p`
  font-size: calc(1rem + 0.2vw);
  line-height: 1.65;
  margin: 1rem 1rem 1rem;
  padding: 0;

  strong {
    font-family: ${props => props.theme.fontPrimary};
    font-weight: normal;
  }

  &:last-of-type {
    margin-bottom: 4rem;
  }
`

const IntroTextFirstLine = IntroText.extend`
  &::first-line {
    font-weight: bold;
    font-family: ${props => props.theme.fontPrimary};
  }
`

const QuizBubble = styled(Link)`
  position: relative;

  &:hover p {
    transform: translateY(-5px);
    background: ${props => props.theme.primary};
    color: ${props => props.theme.bg};

    &::after {
      border-top-color: ${props => props.theme.primary};
    }
  }
`

const SpeechBubble = styled.p`
  background: ${props => props.theme.bg};
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
  border-radius: 3px;
  color: ${props => props.theme.tertiary};
  font-size: 10px;
  padding: 5px 10px;
  letter-spacing: 0.1rem;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  transition: background 0.25s ease-out, transform 0.25s ease-out;
  top: -30px;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.02);
    border-bottom: 0;
    border-left: 0;
    margin-left: -8.5px;
    margin-bottom: -10px;
    transition: border-top-color 0.25s ease-out;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${props => props.theme.bg};
    border-bottom: 0;
    border-left: 0;
    margin-left: -8.5px;
    margin-bottom: -10px;
    transition: border-top-color 0.25s ease-out;
  }
`

export default function IntroPage() {
  return (
    <IntroWrap>
      <QuizBubble to={siteInfo.mainNav[0].slug}>
        <SpeechBubble>Ready to test?</SpeechBubble>
        <SvgExperimenter />
      </QuizBubble>
      <IntroSubtitle>
        {introPageData.p1}
      </IntroSubtitle>
      <IntroTextFirstLine dangerouslySetInnerHTML={{ __html: introPageData.p2, }} />
      <IntroText dangerouslySetInnerHTML={{ __html: introPageData.p3, }} />
      <QuizButton text={siteInfo.mainNav[0].name} to={siteInfo.mainNav[0].slug} />
    </IntroWrap>
  )
}

IntroPage.propTypes = {
  content: PropTypes.object,
}
