import React from 'react'

import { Helmet } from 'react-helmet'

import Componentdsadsa from '../components/componentdsadsa'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Juicy Klutzy Dragonfly</title>
        <meta property="og:title" content="Juicy Klutzy Dragonfly" />
      </Helmet>
      <div className="home-container1"></div>
      <h1>Heading</h1>
      <Componentdsadsa rootClassName="componentdsadsa-root-class-name"></Componentdsadsa>
    </div>
  )
}

export default Home
