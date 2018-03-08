import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const IMG = styled.img`
  height: 100px;
  max-width: 100%;
  transform: scale(1);
  transition: transform 0.25s cubic-bezier(0.19, 1.01, 0.74, 1.18);
`;

const ReadingWrap = styled.ul`
  background: #fff;
  border-radius: 3rem;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  list-style-type: none;
  margin: 2rem auto 0;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 3rem;
`;

const ReadingLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex: 1;

  &:hover {
    img {
      transform: scale(1.1);
    }
    button {
      background-color: ${props => props.theme.secondary};
    }
  }
`;

const BookWrap = styled.li`
  max-width: 100%;
  padding: 2rem;
`;

const BookTitle = styled.h5`
  display: inline-block;
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
