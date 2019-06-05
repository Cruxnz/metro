import React, { Component } from 'react'
import withStyles from 'react-jss'
import styles from './SplashPage.styles.js'

class SplashPage extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.h1}>Header Content</h1>
          <svg style={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,100 100,0 100,100"/>
          </svg>
        </div>
        <section>
          <h1>Section Content</h1>
        </section>
      </div>
    )
  }
}

export default SplashPage
