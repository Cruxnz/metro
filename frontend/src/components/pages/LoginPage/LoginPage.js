import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import styles from './LoginPage.styles.js'
import SubmitButton from '../../SubmitButton/SubmitButton'

class LoginPage extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.loginPageContainer}>
        <div className={classes.loginImageContainer}>
          <img src='/metro-logo@2x.png' />
        </div>

        <div className={classes.signUpFormContainer}>
          <form className={classes.signUpForm}>
            <h1 className={classes.signUpHeaderText}> Login </h1> <br />
            <input
              className={classes.inputBox}
              type='text'
              placeholder='Email'
              name='email'
            />
            <input
              className={classes.inputBox}
              type='text'
              placeholder='Password'
              name='password'
            />
            <Link to='/'>
              <SubmitButton text='Login' />
            </Link>
            <div className={classes.alternateLinksContainer}>
              <a className={classes.forgotPasswordLink}>I forgot my password</a>
              <Link to='/Register' className={classes.signUpPageLink}>
                Or sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(LoginPage)
