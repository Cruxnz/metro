import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import styles from './TopBar.styles.js'

class TopBar extends Component {
  render () {
    return (
      <div style={styles.outer}>
        <div style={styles.container}>
          <div style={styles.leftSection}>
            <Link to='/'>
              <img style={styles.logo} src='/metro-logo@2x.png' />
            </Link>
          </div>
          <div style={styles.rightSection}>
            <div style={styles.buttonContainer}>
              <div style={styles.link}>
                Pricing
              </div>
              <div style={styles.link}>
                How It Works
              </div>
              <div style={styles.link}>
                Support
              </div>
            </div>
            <div style={styles.buttonContainer}>
              <Link to='/download/'>
                <button style={styles.button}>
                  Download
                </button>
              </Link>
              <Link to='/login/'>
                <button style={styles.button}>
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TopBar)
