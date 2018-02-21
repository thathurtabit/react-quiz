import { Component, } from 'react'
import { withRouter, } from 'react-router'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0,
      })
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
