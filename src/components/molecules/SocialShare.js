import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IMG = styled.img`
  height: 75px;
  max-width: 100%;
`;

const SocialWrap = styled.section`
  background: rgba(0, 0, 0, 0.025);
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin: 2rem auto;
  max-width: 200px;
  padding: 3rem;
`;

const ShareLink = styled.a`
  display: block;
  
  img {
    transition: transform 0.25s ease-out;
    transform: scale(1);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;


export default function SocialShare(props)  {

  let personality = encodeURIComponent(props.personality.trim());

  return (
    <SocialWrap>
      <ShareLink href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fwhatkindofdesigner.com&text=My%20design%20personality%20is%20${personality}.%20You%20can%20find%20out%20yours%20at%3A&hashtags=whatkindofdesigner`} target="_blank">
  	   <IMG src="images/SVG/twitter_icon.svg" alt="Share your results on Twitter" />
      </ShareLink>
      <ShareLink href="https://www.facebook.com/sharer/sharer.php?u=https%3A//whatkindofdesigner.com" target="_blank">
       <IMG src="images/SVG/facebook_icon.svg" alt="Share your results on Facebook" />
      </ShareLink>
    </SocialWrap>
  )
}

SocialShare.propTypes = {
  moreLink: PropTypes.string,
  title: PropTypes.string,
}