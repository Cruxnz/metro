import React, { Component } from 'react'

class SplashPage extends Component {
  render () {
    return (
      <div style={{
        backgroundColor: 'purple',
        width: '50%'
      }}>
        <img style={{
          objectFit: 'contain',
          height: '80%',
          width: '100%'
        }} src='./metro-logo@2x.png' />
        Splash Page
      </div>
    )
  }
}

export default SplashPage
