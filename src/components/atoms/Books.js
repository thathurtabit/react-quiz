import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
      box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.25);
      transform: scale(1.1);
    }
    button {
      background-color: ${props => props.theme.secondary};
    }
  }
`;

const IMG = styled.img`
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  height: 140px;
  max-width: 100%;
  transform: scale(1);
  transition: transform 0.25s cubic-bezier(0.19, 1.01, 0.74, 1.18), box-shadow 0.25s ease-out;
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
  font-family: ${props => props.theme.fontPrimary};
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
`;

const BookText = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 0.785rem;
  min-height: 40px;
`;

const BookButton = styled.button`
  background: ${props => props.theme.primary};
  border-radius: 20px;
  border: 0;
  color: ${props => props.theme.bg};
  font-family: ${props => props.theme.fontPrimary};
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
      <BookText>{book.text}</BookText>
      <BookButton>View</BookButton>
    </ReadingLink>
  </BookWrap>
));

export default Books;

Books.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
