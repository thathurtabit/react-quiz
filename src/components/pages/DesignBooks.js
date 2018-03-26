import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import designBooksData from "../../api/designBooksData";
import resultData from "../../api/resultData";
import siteInfo from "../../api/siteInfo";
import Books from "../atoms/Books";

const PageWrap = styled.section`
  position: relative;
  margin: 0 2rem 5rem;
`;

const PageTitle = styled.h1`
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.fontPrimary};
  font-size: calc(10vw);
  margin-bottom: 1rem;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    font-size: calc(20px + 4vw);
  }
`;

const PageIntro = styled.p`
  display: inline-block;
  font-size: 1rem;
  color: ${props => props.theme.tertiary};
`;

const ReadingWrap = styled.ul`
  background: #fff;
  border-radius: 3rem;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr;
  list-style-type: none;
  margin: 2rem auto 0;
  max-width: ${props => props.theme.maxContentWidthWide};
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

  @media screen and (min-width: ${props => props.theme.breakpointLG}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const More = styled(Link)`
  border-radius: 20px;
  color: ${props => props.theme.primary};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;


export default function DesignBooks() {

    // Convert object keys to array
    const booksData = Object.keys(resultData);
    // Set up array
    let booksArr = []
    // Map data into books array
    booksData.map(key => {
        booksArr = booksArr.concat(resultData[key].readingList);
        return booksArr;
    });
    // Filter only unique values
    const booksUnique = booksArr.filter((book, pos, arr) => (
        arr.map(mapBook => mapBook.title).indexOf(book.title) === pos
    ));

    return (
        <PageWrap>
            <PageTitle>{designBooksData.title}</PageTitle>
            <PageIntro>{designBooksData.intro}<More to={siteInfo.mainNav[0].slug}>take the quiz</More>.</PageIntro>
            <ReadingWrap>
                <Books books={booksUnique} />
            </ReadingWrap>
            <Helmet>
                <title>{`${designBooksData.title} | ${siteInfo.title}`}</title>
                <meta name="description" content={`Learn about the ${designBooksData.intro}`} />
            </Helmet>
        </PageWrap>
    );
}

DesignBooks.propTypes = {
  books: PropTypes.array
};

Books.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  imgURL: PropTypes.string
};
