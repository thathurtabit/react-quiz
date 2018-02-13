import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IMG = styled.img`
  height: 300px;
  max-width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    height: 350px;
  }

  @media screen and (min-width: ${props => props.theme.breakpointMD}) {
    height: 400px;
  }
`;

export default function HeroImage(props)  {
  return (
  	<IMG src={`images/SVG/${props.src}.svg`} alt={props.title} />
  )
}

HeroImage.propTypes = {
  moreLink: PropTypes.string,
  title: PropTypes.string,
}