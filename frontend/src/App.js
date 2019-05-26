import React from 'react'
import SplashPage from './components/pages/SplashPage/SplashPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TopBar from './components/TopBar/TopBar'
import RegisterPage from './components/pages/RegisterPage/RegisterPage'
import DownloadPage from './components/pages/DownloadPage/DownloadPage'
import LoginPage from './components/pages/LoginPage/LoginPage'

function App () {
  return (
    <Router>
      <TopBar />
      <Route path='/' exact component={SplashPage} />
      <Route path='/register/' exact component={RegisterPage} />
      <Route path='/download/' exact component={DownloadPage} />
      <Route path='/login/' exact component={LoginPage} />
    </Router>
  )
}

export default App
