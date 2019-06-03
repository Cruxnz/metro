import React, { Component } from 'react'
import withStyles from 'react-jss'
import styles from './RegisterPage.styles.js'

class RegisterPage extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.registerPageContainer}>
        <div className={classes.registerImageContainer}>
          <img src='/metro-logo@2x.png' />
        </div>

        <div className={classes.signUpFormContainer}>
          <form className={classes.signUpForm}>
            <h1 className={classes.signUpHeaderText}> Sign Up </h1> <br />
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
            <input
              className={classes.createAccountButton}
              type='submit'
              value='Create Account'
            />
            <a className={classes.existingAccountLink}>
              Or use an existing account
            </a>
          </form>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(RegisterPage)
