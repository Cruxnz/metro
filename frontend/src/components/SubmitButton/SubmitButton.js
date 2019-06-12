import React, { Component } from 'react'
import withStyles from 'react-jss'
import styles from './SubmitButton.styles.js'

class SubmitButton extends Component {
  render () {
    const { classes, customClass, text } = this.props
    return (
      <button className={`${customClass} ${classes.button}`}>{text}</button>
    )
  }
}

export default withStyles(styles)(SubmitButton)
