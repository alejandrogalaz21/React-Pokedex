import React, { Component, Fragment } from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout