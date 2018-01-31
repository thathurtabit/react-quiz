import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoundTitleH = styled.h4`
  font-size: 1em;
  margin: 0;
  text-align: center;
`;

export default function RoundTitle(props)  {
  return (
  	<RoundTitleH style={{display: props.showRound ? 'block' : 'none'}}>{props.roundTitle}</RoundTitleH>
  )
}

RoundTitle.propTypes = {
  roundTitle: PropTypes.string.isRequired,
}