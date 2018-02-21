import React, { Component, } from 'react'
import styled from 'styled-components'

const FooterWrap = styled.footer`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.primaryLight};
  font-family: ${props => props.theme.fontSecondary};
  font-size: 0.75rem;
  margin: 0;
  padding: 0.75rem;
  position: relative;
  text-align: center;
`

const FeedbackWrap = styled.footer`
  background: rgba(255, 255, 255, 0.05);
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.fontSecondary};
  font-size: 0.75rem;
  margin: 0;
  padding: 0.75rem;
  position: relative;
  text-align: center;
`

const Link = styled.a`
  color: ${props => props.dark ? props.theme.primary : props.theme.primaryLight };
  position: relative;
  text-decoration: none;
  transition: color 0.2s ease-out;

  &:hover {
    color: ${props => props.dark ? props.theme.primaryLight : props.theme.bg };

    i {
      background-color: ${props => props.theme.primaryLight};
    }
    i::after {
      border-top-color: ${props => props.theme.primaryLight};
    }
  }
`

const Col = styled.p`
  color: ${props => props.theme.primaryLight};
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease-out;
`

const Icon = styled.i`
  position: absolute;
  left: -20px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  height: 10px;
  top: 2px;
  transition: background-color 0.25s ease-out;
  width: 13px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 3px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.2);
    border-bottom: 0;
    border-left: 0;
    margin-left: -2px;
    margin-bottom: -3px;
    transition: border-top-color 0.25s ease-out;
  }
`

const Copyright = () => {
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  return <Col><span dangerouslySetInnerHTML={{ __html: '&copy;', }} /> {currentYear} <Link href='https://www.codecomputerlove.com/' target='_blank' rel='noopener'>Made with Computerlove</Link></Col>
}

const Feedback = () => {
  return <Col><Link href='https://goo.gl/PibK8C' target='_blank' rel='noopener' title="Have some thoughts you'd like to share?" dark><Icon />Feedback</Link></Col>
}

export default class MainFooter extends Component {
  // State constructor
  constructor(props) {
    super(props)
    this.state = {
      display: {
        footer: false,
      },
    }
  }

  // React Lifecycle
  componentDidMount() {
    // Delay state change to give page time to load
    setTimeout(() => {
      this.setState({
        display: {
          footer: true,
        },
      })
    }, 1000)
  }

  // Render
  render() {
    return (
      <section style={{ display: this.state.display.footer ? 'block' : 'none', }}>
        <FeedbackWrap>
          <Feedback />
        </FeedbackWrap>
        <FooterWrap>
          <Copyright />
        </FooterWrap>
      </section>
    )
  }
}

