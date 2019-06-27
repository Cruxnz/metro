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
    backgroundImage: `linear-gradient(to right, ${colors.purple}, ${colors.blue})`
  },
  backgroundContent: {
    position: 'absolute',
    height: '60px',
    width: '100%',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    pointerEvents: 'none'
  },
  backgroundContainer: {
    height: '60px',
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    pointerEvents: 'none'
  },
  backgroundFadeLeftHalfContainer: {
    width: '50%',
    height: '60px',
    marginLeft: metrics.section,
    pointerEvents: 'none'
  },
  backgroundFadeRightHalfContainer: {
    width: '50%',
    height: '60px',
    marginLeft: metrics.section,
    pointerEvents: 'none',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0))',
  },
  leftHalf: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: metrics.section
  },
  logo: {
    position: 'relative',
    width: '185px',
    zIndex: 20
  },
  textLink: {
    ...text.style.bodycopy,
    fontSize: '15px',
    color: 'white',
    marginLeft: metrics.section,
    textDecoration: 'none'
  },
  rightHalf: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '600px',
    zIndex: 20
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
