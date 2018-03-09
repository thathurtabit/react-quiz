import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import designBooksData from "../../api/designBooksData";
import resultData from "../../api/resultData";
import siteInfo from "../../api/siteInfo";

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

const IMG = styled.img`
  height: 140px;
  max-width: 100%;
  transform: scale(1);
  transition: transform 0.25s cubic-bezier(0.19, 1.01, 0.74, 1.18);
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

const ReadingLink = styled.a`
  align-items: center;
  color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  text-decoration: none;
  transition: color 0.25s ease-out;

  &:visited {
    color: ${props => props.theme.primary};
  }

  &:hover {
    color: ${props => props.theme.secondary};
    
    img {
      transform: scale(1.1);
    }
    button {
      background-color: ${props => props.theme.secondary};
    }
  }
`;

const BookWrap = styled.li`
  padding: 2rem 0;
  list-style-type: none;
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    float: left;
    width: 50%;

    @supports (display: grid) {
      width: auto;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    float: left;
    width: 33.33%;

    @supports (display: grid) {
      width: auto;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpointLG}) {
    float: left;
    width: 25%;

    @supports (display: grid) {
      width: auto;
    }
  }
`;

const BookTitle = styled.h5`
  display: inline-block;
  font-size: 0.95rem;
`;

const BookButton = styled.button`
  background: ${props => props.theme.primary};
  border: 0;
  border-radius: 20px;
  color: ${props => props.theme.bg};
  font-size: 0.9rem;
  padding: 5px 10px;
  transition: background-color 0.25s ease-out;

  &:hover {
    background-color: ${props => props.theme.secondary};
    cursor: pointer;
  }
`;

const Books = ({ books }) =>
  books.map(book => (
    <BookWrap key={book.title}>
      <ReadingLink
        href={book.link}
        target="_blank"
        title={`View '${book.title}' on Amazon`}
        rel="noopener"
      >
        <IMG src={book.imgURL} alt={book.title} />
        <BookTitle>{book.title}</BookTitle>
        <BookButton>View</BookButton>
      </ReadingLink>
    </BookWrap>
  ));

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
