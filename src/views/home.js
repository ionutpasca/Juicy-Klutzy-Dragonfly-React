import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Juicy Klutzy Dragonfly</title>
        <meta property="og:title" content="Juicy Klutzy Dragonfly" />
      </Helmet>
    </div>
  )
}

export default Home
