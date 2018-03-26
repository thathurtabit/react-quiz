import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Books from "../atoms/Books";

const SectionTitle = styled.h3`
  font-family: ${props => props.theme.fontPrimary};
  font-size: calc(1rem + 1.75vw);
`;

const SectionTitleIntro = styled.p`
  color: ${props => props.theme.tertiary};
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 2rem;
`;

const ReadingWrap = styled.ul`
  background: #fff;
  border-radius: 3rem;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr;
  list-style-type: none;
  margin: 2rem auto 0;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 3rem;

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function RecommendedReading(props) {
  return (
    <div>
      <SectionTitleIntro>{props.personality}'s</SectionTitleIntro>
      <SectionTitle>Recommended Reading</SectionTitle>
      <ReadingWrap>
        <Books books={props.books} />
      </ReadingWrap>
    </div>
  );
}

RecommendedReading.propTypes = {
  books: PropTypes.array,
  personality: PropTypes.string.isRequired
};

Books.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  imgURL: PropTypes.string
};
