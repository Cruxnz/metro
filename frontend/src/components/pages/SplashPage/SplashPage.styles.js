import { text, colors, metrics } from '../../../common/constants/'

const styles = {
  container: {
    display: '',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  header: {
    position: 'relative',
    height: '500px',
    backgroundImage: 'linear-gradient(#5252D4, #9666A3)',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    position: 'absolute',
    height: '100%',
    width: '75%',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.dim
  },
  headerContainer: {
    width: '500px',
    backgroundColor: colors.dim
  },
  subheading: {
    ...text.style.subheading,
    color: colors.white
  },
  heading: {
    ...text.style.heading,
    color: colors.yellow
  },
  headerButton: {
    ...text.style.buttonUppercase,
    height: 40,
    marginTop: metrics.section,
    borderRadius: metrics.baseRadius,
    color: 'white',
    padding: `0 ${metrics.section}`,
    border: `2px solid ${colors.green}`,
    backgroundColor: colors.transparent,
    '& hover': {
      backgroundColor: colors.green
    }
  },
  sectionTwo: {
    position: 'relative',
    height: '300px',
    display: 'flex',
    justifyContent: 'center'
  },
  sectionTwoHeading: {
    ...text.style.heading,
    color: colors.red
  },
  sectionTwoBodycopy: {
    ...text.style.bodycopyLarge,
    marginTop: metrics.basePadding,
    width: '350px',
    color: colors.darkGray,
    lineHeight: '20px'
  },
  sectionTwoButton: {
    ...text.style.buttonUppercase,
    height: 40,
    marginTop: metrics.section,
    borderRadius: metrics.baseRadius,
    color: colors.red,
    padding: `0 ${metrics.section}`,
    border: `2px solid ${colors.red}`,
    backgroundColor: colors.transparent,
    '& hover': {
      backgroundColor: colors.green
    }
  },
  sectionThree: {
    position: 'relative',
    height: '400px',
    backgroundImage: 'linear-gradient(#5252D4, #9666A3)',
    display: 'flex',
    justifyContent: 'center'
  },
  sectionFour: {
    height: '300px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  footer: {
    position: 'relative',
    height: '300px',
    backgroundImage: 'linear-gradient(#5252D4, #9666A3)',
    display: 'flex',
    justifyContent: 'center'
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
