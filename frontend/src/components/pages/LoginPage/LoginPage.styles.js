const styles = {
  loginPageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    height: '100vh',
    width: '100vw'
  },

  loginImageContainer: {
    width: '55vw',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center'
  },

  signUpFormContainer: {
    width: '45vw',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  signUpForm: {
    width: 300,
    display: 'flex',
    flexDirection: 'column'
  },

  signUpHeaderText: {
    fontWeight: 600,
    fontFamily: 'Sans-Serif',
    color: '#c3c3c3'
  },

  alternateLinksContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  forgotPasswordLink: {
    fontFamily: 'Sans-Serif',
    fontSize: 12,
    color: 'grey'
  },

  signUpPageLink: {
    fontFamily: 'Sans-Serif',
    fontSize: 12,
    color: 'blue'
  },

  inputBox: {
    height: 35,
    margin: 5,
    paddingLeft: 7,
    fontFamily: 'Sans-Serif',
    fontSize: 13,
    fontWeight: 100,
    border: '2px solid #c3c3c3',
    borderRadius: 4
  }
}

export default styles
