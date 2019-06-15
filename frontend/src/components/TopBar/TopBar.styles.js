import { text, colors, metrics } from '../../common/constants/'

const styles = {
  outer: {
    // position: 'absolute',
    width: '100%',
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(to right, #e17d71, #5b5ed3)'
  },
  leftHalf: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: metrics.section
  },
  logo: {
    width: '170px'
  },
  textLink: {
    ...text.style.bodycopy,
    fontSize: '15px',
    color: 'white',
    marginLeft: metrics.section
  },
  rightHalf: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '600px'
  },
  textLinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '300px',
    marginRight: metrics.section
  },
  buttonContainer: {
    display: 'flex',
    width: '190px',
    marginRight: metrics.section,
    justifyContent: 'space-between'
  }
}

export default styles
