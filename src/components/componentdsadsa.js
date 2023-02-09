import React from 'react'

import PropTypes from 'prop-types'

import './componentdsadsa.css'

const Componentdsadsa = (props) => {
  return (
    <div className={`componentdsadsa-container ${props.rootClassName} `}>
      <h1 className="">{props.heading}</h1>
      <div className="componentdsadsa-container1"></div>
    </div>
  )
}

Componentdsadsa.defaultProps = {
  heading: 'Heading',
  rootClassName: '',
}

Componentdsadsa.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Componentdsadsa
