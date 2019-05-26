import React, { Component } from 'react'

class DownloadPage extends Component {
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
        }} src='/metro-logo@2x.png' />
        Download Page
      </div>
    )
  }
}

export default DownloadPage
