const styles = {
  outer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(to right, #e17d71, #5b5ed3)',
    alignItems: 'center',
  },

  logo: {
    objectFit: 'contain',
    margin: 17,
    width: '30%'
  },

  textLink: {
    color: 'white',
    fontWeight: 600,
    fontFamily: 'Sans-Serif',
    fontSize: 13
  },

  textLinkContainer: {
    display:'flex',
    width: '20%',
    justifyContent: 'space-between'
  },

  buttonContainer:{
    display:'flex',
    width: '15%',
    justifyContent: 'space-between',
    marginRight: 35
  }
}

export default styles
