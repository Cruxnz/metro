import React, { Component } from 'react'
import SubmitButton from '../../SubmitButton/SubmitButton'
import withStyles from 'react-jss'
import styles from './SplashPage.styles.js'

class SplashPage extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <svg style={styles.svgBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,100 100,0 100,100"/>
          </svg>
          <div style={styles.content}>
            <div style={styles.headerContainer}>
              <div style={styles.headerTitle}>
                Security vetted. Guaranteed.
              </div>
              <div style={styles.headerTitle}>
                Ultra secure VPN. High speed, easy to use.
              </div>
              <SubmitButton
                customClass={styles.headerButton}
                text='DOWNLOAD FOR FREE'
              />
            </div>
          </div>
        </div>
        <div style={styles.sectionTwo}>
          <h1>Second section</h1>
        </div>
        <div style={styles.sectionThree}>
          <h1 style={styles.h1}>Header Content</h1>
          <svg style={styles.svgBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,100 100,0 100,100"/>
          </svg>
          <svg style={styles.svgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,0 100,100 100,0"/>
          </svg>
        </div>
        <div style={styles.sectionFour}>
          <h1>Second section</h1>
        </div>
        <div style={styles.section}>
          <h1>Footer</h1>
          <svg style={styles.svgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,0 100,100 100,0"/>
          </svg>
        </div>
      </div>
    )
  }
}

export default SplashPage
