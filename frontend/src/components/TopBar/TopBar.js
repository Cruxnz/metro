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
        <Link to='/'>
          <img className={classes.logo} src='/metro-logo@2x.png' />
        </Link>
        <div className={classes.textLinkContainer}>
          <a className={classes.textLink}>Pricing</a>
          <a className={classes.textLink}>How our VPN works</a>
          <a className={classes.textLink}>Support</a>
        </div>
        <div className={classes.buttonContainer}>
          <Link to='/download/'><TopBarButton text='Download'/></Link>
          <Link to='/login/'><TopBarButton text='Login'/></Link>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TopBar)
