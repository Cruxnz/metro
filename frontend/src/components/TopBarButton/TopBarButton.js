import React, { Component } from 'react'
import withStyles from 'react-jss'
import styles from './TopBarButton.styles.js'

class TopBarButton extends Component {
  render () {
    const { classes, customClass, text } = this.props
    return (
      <button className={`${customClass} ${classes.button}`}>{text}</button>
    )
  }
}

export default withStyles(styles)(TopBarButton)
