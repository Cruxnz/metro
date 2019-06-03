const styles = {
  registerPageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    height: '100vh',
    width: '100vw'
  },

  registerImageContainer: {
    width: '50vw',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center'
  },

  signUpFormContainer: {
    width: '50%',
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

  existingAccountLink: {
    fontFamily: 'Sans-Serif',
    fontSize: 12,
    color: 'blue',
    textAlign: 'right'
  },

  inputBox: {
    height: 35,
    margin: 5,
    paddingLeft: 7,
    fontFamily: 'Sans-Serif',
    fontSize: 13,
    fontWeight: 100,
    borderRadius: 4
  },

  createAccountButton: {
    margin: 5,
    marginTop: 8,
    height: 40,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#e9445b',
    textTransform: 'uppercase',
    fontWeight: 500,
    letterSpacing: 2
  }
}

export default styles
