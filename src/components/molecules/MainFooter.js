import React, { Component } from 'react'
import styled from 'styled-components'

const FooterWrap = styled.footer`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.primaryLight};
  display: flex;
  font-size: 0.75rem;
  font-family: ${props => props.theme.fontSecondary};
  margin: 0;
  padding: 0.75rem;
  position: relative;
  text-align: center;
`

const Link = styled.a`
  color: ${props => props.theme.primaryLight};
  text-decoration: none;
  transition: color 0.2s ease-out;

  &:hover {
    color: ${props => props.theme.bg};
  }
`

const Col = styled.p`
  color: ${props => props.theme.primaryLight};
  text-decoration: none;
  transition: color 0.2s ease-out;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    width: 50%;
  }
`

const Copyright = () => {
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  return <Col><span dangerouslySetInnerHTML={{ __html: '&copy;' }} /> {currentYear} <Link href='https://www.codecomputerlove.com/' target='_blank' rel='noopener'>Made with Computerlove</Link></Col>
}

const Feedback = () => {
  return <Col><Link href='https://goo.gl/PibK8C' target='_blank' rel='noopener'>Feedback</Link></Col>
}


export default class MainFooter extends Component {
  // State constructor
  constructor(props) {
    super(props)
    this.state = {
      display: {
        footer: false
      }
    }
  }

  // React Lifecycle
  componentDidMount() {
    // Delay state change to give page time to load
    setTimeout(() => {
      this.setState({
        display: {
          footer: true
        }
      })
    }, 1000)
  }

  // Render
  render() {
    return (
      <FooterWrap style={{ display: this.state.display.footer ? 'block' : 'none' }}>
        <Copyright />
        <Feedback />
      </FooterWrap>
    )
  }
}

