import React from 'react'

import PropTypes from 'prop-types'

import Component1 from './component1'
import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Component1 className="navigation-links1-component"></Component1>
      <span className="navigation-links1-text">{props.text1}</span>
      <span className="navigation-links1-text1">{props.text2}</span>
      <span className="navigation-links1-text2">{props.text3}</span>
      <span className="navigation-links1-text3">{props.text4}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text4: 'Blog',
  text3: 'Team',
  text1: 'Features',
  rootClassName: '',
  text2: 'Pricing',
}

NavigationLinks1.propTypes = {
  text4: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks1
