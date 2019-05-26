import React, { Component } from 'react'

class LoginPage extends Component {
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
        Login Page
      </div>
    )
  }
}

export default LoginPage
