import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../molecules/Header';
import Intro from '../atoms/Intro';

const Quiz = styled.section`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class App extends Component {
  render() {
    return (
      <Quiz>
        <Header />
        <Intro introText="This is my intro text. I hope you enjoy it." />
      </Quiz>
    );
  }
}

