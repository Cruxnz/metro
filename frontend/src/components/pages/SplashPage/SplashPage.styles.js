import { text, colors } from '../../../common/constants/'

const styles = {
  container: {
    display: '',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  header: {
    position: 'relative',
    height: '300px',
    backgroundImage: 'linear-gradient(#5252D4, #9666A3)'
  },
  content: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.dim
  },
  headerContainer: {
    width: '300px',
    height: '100px',
    backgroundColor: colors.yellow
  },
  headerTitle: {
    ...text.style.input
  },
  headerButton: {
    backgroundColor: colors.green
  },
  section: {
    position: 'relative',
    height: '300px',
    backgroundImage: 'linear-gradient(#5252D4, #9666A3)'
  },
  sectionTwo: {
    height: '300px',
  },
  sectionThree: {
    position: 'relative',
    height: '400px',
    backgroundImage: 'linear-gradient(#5252D4, #9666A3)'
  },
  sectionFour: {
    height: '300px',
  },
  backgroundGradient: {
    backgroundImage: 'linear-gradient(#5252D4, #9666A3)'
  },
  h1: {
    textAlign: 'center',
    color: 'white'
  },
  svgBottom: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '6vw'
    /* set height to pixels if you want angle to change with screen width */
  },
  svgTop: {
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '6vw'
    /* set height to pixels if you want angle to change with screen width */
  }
}

export default styles
