import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoundTitleH2 = styled.h2`
  font-size: 2em;
  margin: 0;
  text-align: center;
  color: palevioletred;
`;

export default function RoundTitle(props)  {
  return (
  	<RoundTitleH2 style={{display: props.showRound ? 'block' : 'none'}}>{props.roundTitle}</RoundTitleH2>
  )
}

RoundTitle.propTypes = {
  roundTitle: PropTypes.string.isRequired,
}