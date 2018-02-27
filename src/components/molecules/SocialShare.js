import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const IMG = styled.img`
  height: 75px;
  max-width: 100%;
`;

const SocialWrap = styled.section`
  & > a {
    display: inline-block;
  }

  background: #fff;
  border-radius: 3rem;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin: 2rem auto 0;
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

export default function SocialShare(props) {
  const personality = encodeURIComponent(props.personality.trim());
  let encodedTweet;

  if (props.resultTweet) {
    encodedTweet = `https://twitter.com/intent/tweet?url=https%3A%2F%2Fwhatkindofdesigner.com&text=I%27m%20a%20${personality}.%20What%20kind%20of%20designer%20are%20you%3F%20Find%20out%20here%3A&hashtags=WhatKindOfDesigner`;
  } else {
    encodedTweet = `https://twitter.com/intent/tweet?url=https%3A%2F%2Fwhatkindofdesigner.com&text=What%20kind%20of%20designer%20are%20you%3F%20Find%20out%20here%3A&hashtags=WhatKindOfDesigner`;
  }

  return (
    <SocialWrap>
      <ShareLink href={encodedTweet} target="_blank" rel="noopener">
        <IMG
          src="../images/SVG/twitter_icon.svg"
          alt="Share your results on Twitter"
        />
      </ShareLink>
      <ShareLink
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A//whatkindofdesigner.com"
        target="_blank"
        rel="noopener"
      >
        <IMG
          src="../images/SVG/facebook_icon.svg"
          alt="Share your results on Facebook"
        />
      </ShareLink>
    </SocialWrap>
  );
}

SocialShare.propTypes = {
  personality: PropTypes.string.isRequired,
  resultTweet: PropTypes.bool
};

SocialShare.defaultProps = {
  resultTweet: false
};
