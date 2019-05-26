import React, { Component } from 'react'

class ProfilePage extends Component {
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
        Profile Page
      </div>
    )
  }
}

export default ProfilePage
