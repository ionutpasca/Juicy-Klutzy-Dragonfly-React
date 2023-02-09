import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <h1 className="">{props.heading}</h1>
      <div className="component-container1"></div>
    </div>
  )
}

AppComponent.defaultProps = {
  heading: 'Heading',
  rootClassName: '',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
