import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';
import PropTypes from 'prop-types'

GoogleAnalytics.initialize('UA-114586714-1');

const GATracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options,
    })
    GoogleAnalytics.pageview(page)
  }

  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page)
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return HOC;
}

GATracker.propTypes = {
  location: PropTypes.string,
}


export default GATracker;