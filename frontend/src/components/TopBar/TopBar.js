import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import styles from './TopBar.styles.js'
import TopBarButton from '../TopBarButton/TopBarButton'

class TopBar extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.outer}>
        <div style={styles.backgroundContent}>
          <div style={styles.backgroundContainer}>
            <div  style={styles.backgroundFadeLeftHalfContainer} />
            <div  style={styles.backgroundFadeRightHalfContainer} />
          </div>
        </div>
        <div className={classes.leftHalf}>
          <Link to='/'>
            <img className={classes.logo} src='/metro-logo@2x.png' />
          </Link>
        </div>
        <div className={classes.rightHalf}>
          <div className={classes.textLinkContainer}>
            <Link to='/download/' className={classes.textLink}>Pricing</Link>
            <Link to='/download/' className={classes.textLink}>How our VPN works</Link>
            <Link to='/download/' className={classes.textLink}>Support</Link>
          </div>
          <div className={classes.buttonContainer}>
            <Link to='/download/'><TopBarButton text='Download' /></Link>
            <Link to='/login/'><TopBarButton text='Login' /></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TopBar)
