import React from "react";
import PropTypes from "prop-types";
import GoogleAnalytics from "react-ga";
import styled from "styled-components";
import resultData from "../../api/resultData";
import Restart from "../atoms/RestartButton";
import HeroImage from "../atoms/HeroImage";
import SocialShare from "../molecules/SocialShare";
import PersonalityInfoList from "../organisms/PersonalityInfoList";
import SimilarsOpposite from "../organisms/SimilarsOpposite";
import RecommendedReading from "../molecules/RecommendedReading";

const ResultsWrap = styled.section`
  margin-bottom: 6rem;
`;

const PageWrap = styled.section`
  position: relative;
  max-width: ${props => props.theme.maxContentWidth};
  margin: ${props => (props.extraSpacing ? "0 auto 10rem" : "0 auto 3rem")};
`;

const ResultsTitle = styled.h2`
  font-family: ${props => props.theme.fontPrimary};
  margin: 1rem 1rem 2rem;
  font-size: calc(12vw);

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    font-size: calc(20px + 5vw);
    margin: 1rem 1rem 4rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    font-size: calc(20px + 4vw);
    margin: 1rem 1rem 5rem;
  }
`;

const ResultIntro = styled.p`
  color: ${props => props.theme.tertiary};
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 5rem;
`;

const ResultsText = styled.p`
  font-size: calc(1rem + 0.5vw);
  line-height: 1.75;
  margin: 2rem;
  position: relative;

  &::first-line {
    font-weight: bold;
    font-family: ${props => props.theme.fontPrimary};
  }
`;

const HR = styled.hr`
  border: 0;
  margin: 5rem 0 8rem;
  overflow: visible;
  padding: 0;
  position: relative;

  &::before {
    border-top: 5px solid rgba(0, 0, 0, 0.05);
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 50px;
  }
`;

let sentResult = false;

export default function Results(props) {
  if (props.show && !sentResult && props.title !== "") {
    GoogleAnalytics.event({
      category: "Quiz",
      action: "Result",
      label: props.title
    });
    sentResult = true;
  }

  return (
    <ResultsWrap style={{ display: props.show ? "block" : "none" }}>
      <PageWrap>
        <ResultIntro>You are a:</ResultIntro>
        <ResultsTitle>{props.title}</ResultsTitle>
        <HeroImage src={props.moreLink} alt={props.title} />
        <ResultsText dangerouslySetInnerHTML={{ __html: props.text }} />
      </PageWrap>

      <HR />
      <PersonalityInfoList resultKey={props.resultKey} />
      <HR />
      <SimilarsOpposite resultKey={props.resultKey} />
      <HR />

      <RecommendedReading books={resultData[props.resultKey].readingList} personality={resultData[props.resultKey].title} />

      <PageWrap>
        <ResultIntro>Share your result</ResultIntro>
        <SocialShare resultTweet personality={props.title} />
        <HR />
        <ResultIntro>Not a {props.title}?</ResultIntro>
        <Restart restartText={props.nextText} onClick={props.handleRestart} />
      </PageWrap>
    </ResultsWrap>
  );
}

Results.propTypes = {
  handleRestart: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  moreLink: PropTypes.string.isRequired,
  nextText: PropTypes.string.isRequired,
  resultKey: PropTypes.string.isRequired
};
