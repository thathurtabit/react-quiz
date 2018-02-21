import React from 'react'
import styled from 'styled-components'
import resultData from '../../api/resultData'
import HeroImage from '../atoms/HeroImage'
import QuizButton from '../atoms/QuizButton'
import SocialShare from '../molecules/SocialShare'
import siteInfo from '../../api/siteInfo'
import PersonalityInfoList from '../organisms/PersonalityInfoList'
import SimilarsOpposite from '../organisms/SimilarsOpposite'
import PropTypes from 'prop-types'

const PageWrap = styled.section`
  position: relative;
  max-width: ${props => props.theme.maxContentWidth};
  margin: ${props => props.extraSpacing ? '0 auto 10rem' : '0 auto 3rem'};
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

const PageTitleIntro = styled.p`
  color: ${props => props.theme.tertiary};
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 5rem;
`

const PageIntro = styled.main`
  font-size: calc(1rem + 0.5vw);
  line-height: 1.75;
  margin: 2rem;
  position: relative;

  strong {
    font-family: ${props => props.theme.fontPrimary};
    font-weight: normal;
  }

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    margin: 4rem 2rem 3rem;
  }
`

const HR = styled.hr`
  border: 0;
  margin: 5rem 0 8rem;
  overflow: visible;
  padding: 0;
  position: relative;

  &::before {
    border-top: 5px solid rgba(0, 0, 0, 0.05);
    content: '';
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 50px;
  }
`

export default function DesignPersonality(props) {
  return (
    <section>
      <PageWrap>
        <PageTitleIntro>{siteInfo.singularType.name}</PageTitleIntro>
        <PageTitle>{resultData[props.dataKey].title}</PageTitle>
        <HeroImage src={resultData[props.dataKey].slug} alt={resultData[props.dataKey].title} />
        <PageIntro dangerouslySetInnerHTML={{ __html: resultData[props.dataKey].text, }} />
      </PageWrap>

      <HR />
      <PersonalityInfoList resultKey={props.dataKey} />
      <HR />
      <SimilarsOpposite resultKey={props.dataKey} />
      <HR />

      <PageTitleIntro>Share</PageTitleIntro>
      <SocialShare personality={resultData[props.dataKey].title} />

      <PageWrap extraSpacing>
        <PageTitleIntro>Are you a {resultData[props.dataKey].title}?</PageTitleIntro>
        <p><QuizButton to={siteInfo.mainNav[0].slug} text={siteInfo.mainNav[0].name} /></p>
      </PageWrap>
    </section>
  )
}

DesignPersonality.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  round: PropTypes.number,
  resultKey: PropTypes.string,
}
