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
    backgroundImage: 'linear-gradient(to bottom right, #5252D4, #9666A3)',
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
    // backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))'
    backgroundColor: colors.dim
  },
  headerContainer: {
    width: '500px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))'
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
  sectionContent: {
    position: 'absolute',
    height: '100%',
    width: '75%',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.dimmer
    // backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))'
  },
  sectionTwoBoxesContainer: {
    width: '500px',
    marginLeft: metrics.section,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dim
  },
  halfContainer: {
    width: '500px',
    marginLeft: metrics.section,
    backgroundColor: colors.dim
  },
  sectionTwoBox: {
    width: '200px',
    height: '300px',
    borderRadius: metrics.baseRadius,
    color: 'white',
    marginRight: metrics.smallSection,
    border: `2px solid ${colors.red}`,
    backgroundColor: colors.white
  },
  sectionTwoBoxLong: {
    width: '220px',
    height: '375px',
    borderRadius: metrics.baseRadius,
    color: 'white',
    marginRight: metrics.smallSection,
    border: `2px solid ${colors.red}`,
    backgroundColor: colors.white
  },
  sectionTwoBoxUpperSection: {
    ...text.style.buttonUppercase,
    width: '100%',
    height: '45px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `2px solid ${colors.red}`,
    color: colors.blue,
  },
  sectionTwoBoxBottomSection: {
    width: '100%',
    height: '85%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  sectionTwoBoxBottomSectionLong: {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  sectionTwoBoxHeading: {
    ...text.style.heading,
    color: colors.blue,
    width: '100%',
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTwoBoxDescription: {
    ...text.style.bodycopy,
    color: colors.blue,
  },
  sectionTwoBodySection: {
    width: '100%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTwoBodyContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: `${metrics.smallPadding} 0 ${metrics.smallPadding} 0`,
    ...text.style.bodycopyLarge,
    color: colors.darkGray
  },
  sectionTwoTickIcon: {
    color: colors.green,
    marginRight: metrics.basePadding
  },
  sectionTwoBoxButtonContainer: {
    width: '100%',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTwoBoxButton: {
    ...text.style.buttonLowercase,
    borderRadius: metrics.circleButton,
    color: colors.red,
    padding: `5px ${metrics.section} 7px ${metrics.section}`,
    border: `2px solid ${colors.red}`,
    backgroundColor: colors.transparent,
    '& hover': {
      backgroundColor: colors.green
    }
  },
  sectionHeading: {
    ...text.style.heading,
    color: colors.red
  },
  bodycopy: {
    ...text.style.bodycopyLarge,
    marginTop: metrics.basePadding,
    width: '75%',
    color: colors.darkGray,
    lineHeight: '25px'
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
    backgroundImage: 'linear-gradient(to bottom right, #5252D4, #9666A3)',
    display: 'flex',
    justifyContent: 'center'
  },
  sectionFour: {
    height: '300px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  sectionFourContainer: {
    width: '500px',
    marginLeft: metrics.section,
    backgroundColor: colors.dim
  },
  sectionFourButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  sectionFourButton: {
    ...text.style.buttonUppercase,
    height: 40,
    marginTop: metrics.section,
    marginBottom: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    color: colors.red,
    padding: `0 ${metrics.section}`,
    border: `2px solid ${colors.red}`,
    backgroundColor: colors.transparent,
    '& hover': {
      backgroundColor: colors.green
    }
  },
  footer: {
    position: 'relative',
    height: '500px',
    backgroundImage: 'linear-gradient(to bottom right, #5252D4, #9666A3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerContent: {
    position: 'absolute',
    height: '300px',
    width: '75%',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.dimmer
    // backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))'
  },
  sectionRoundButton: {
    ...text.style.buttonLowercase,
    borderRadius: metrics.circleButton,
    color: colors.red,
    marginTop: metrics.section,
    padding: `5px ${metrics.section} 7px ${metrics.section}`,
    border: `2px solid ${colors.red}`,
    backgroundColor: colors.transparent,
    '& hover': {
      backgroundColor: colors.green
    }
  },
  footerHalfContainer: {
    width: '500px',
    marginLeft: metrics.section,
    backgroundColor: colors.dim
  },
  footerLogo: {
    width: '200px'
  },
  footerInformation: {
    ...text.style.subheading,
    marginTop: metrics.basePadding,
    color: colors.white
  },
  sectionFourButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  backgroundGradient: {
    backgroundImage: 'linear-gradient(to bottom right, #5252D4, #9666A3)'
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
