import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import styles from './RegisterPage.styles.js'
import SubmitButton from '../../SubmitButton/SubmitButton'

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
            <Link to='/'>
              <SubmitButton text='Create Account' />
            </Link>
            <Link to='/Login' className={classes.existingAccountLink}>
              Or use an existing account
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(RegisterPage)
