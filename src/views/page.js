import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Juicy Klutzy Dragonfly</title>
        <meta property="og:title" content="Page - Juicy Klutzy Dragonfly" />
      </Helmet>
      <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
    </div>
  )
}

export default Page
