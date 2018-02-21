import React from 'react'
import styled from 'styled-components'
import { Link, } from 'react-router-dom'
import PropTypes from 'prop-types'

const GoToQuizButton = styled(Link)`
  background: ${props => props.theme.primary};
  border: 0;
  border-radius: 40px;
  color: ${props => props.theme.bg};
  font-family: ${props => props.theme.fontPrimary};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  padding: 1rem 3rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 2;
  }

  span i {
    font-style: normal;
  }

  &[disabled],
  &[disabled]:hover {
    background: ${props => props.theme.primary};
    cursor: not-allowed;
    opacity: 0.5;

    &::after,
    &::before {
      display: none;
    }
  }
  
  &::before {
    background: ${props => props.theme.secondary};
    border-radius: 40px;
    bottom: 0;
    content: '';
    left: 0;
    perspective: 1000px;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotateY(90deg);
    transition: transform 0.25s ease-out, opacity 0.25s ease-out;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
    cursor: pointer;
    transform: rotateY(0deg);
  }
`

export default function QuizButton(props) {
  return <GoToQuizButton to={props.to}><span dangerouslySetInnerHTML={{ __html: props.text, }} /></GoToQuizButton>
}

QuizButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}
