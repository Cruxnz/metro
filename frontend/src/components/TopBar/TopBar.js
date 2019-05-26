import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import styles from './TopBar.styles.js'

class RegisterPage extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.outer}>
        <Link to='/'>
          <img style={{
            objectFit: 'contain',
            height: '80%',
            width: '100%'
          }} src='/metro-logo@2x.png' />
        </Link>
        <Link to='/download/'><button>Download</button></Link>
        <Link to='/login/'><button>Login</button></Link>
      </div>
    )
  }
}

export default withStyles(styles)(RegisterPage)
