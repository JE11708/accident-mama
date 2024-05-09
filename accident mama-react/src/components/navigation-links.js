import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <AppComponent className="navigation-links-component"></AppComponent>
      <span className="navigation-links-text">{props.text1}</span>
      <span className="navigation-links-text1">{props.text2}</span>
      <span className="navigation-links-text2">{props.text3}</span>
      <span className="navigation-links-text3">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Pricing',
  rootClassName: '',
  text1: 'Features',
  text4: 'Blog',
  text3: 'Team',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
