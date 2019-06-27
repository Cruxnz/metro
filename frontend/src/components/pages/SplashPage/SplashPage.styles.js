import { text, colors, metrics } from '../../../common/constants/'

const styles = {
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    minWidth: '1360px'
  },
  securityIconContainer: {
    ...text.style.subheading,
    color: colors.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  securityIcon: {
    fontSize: '20px',
    marginRight: metrics.smallMargin,
    color: colors.green
  },
  headingIconContainer: {
    color: colors.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  headingIcon: {
    position: 'relative',
    fontSize: '35px',
    marginRight: metrics.baseLargePadding,
    marginBottom: metrics.smallPadding,
    color: colors.blue
  },
  sectionTwoHeadingIcon: {
    position: 'relative',
    fontSize: '50px',
    right: '15px',
    color: colors.blue
  },
  sectionThreeHeadingIcon: {
    position: 'relative',
    fontSize: '35px',
    marginRight: metrics.baseLargePadding,
    marginBottom: metrics.smallPadding,
    color: colors.tinted
  },
  backgroundContent: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    pointerEvents: 'none'
  },
  backgroundContainer: {
    height: '100%',
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    pointerEvents: 'none'
  },
  backgroundFadeLeftHalfContainer: {
    width: '50%',
    height: '100%',
    marginLeft: metrics.section,
    pointerEvents: 'none',
    backgroundColor: colors.red,
    opacity: 0.5,
    filter: 'blur(200px)'
  },
  backgroundFadeRightHalfContainer: {
    width: '50%',
    height: '100%',
    marginLeft: metrics.section,
    pointerEvents: 'none',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0))',
  },
  tiltImage: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundImage: 'url("/metro-splash-header-v1.jpg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    position: 'relative',
    height: '500px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    height: '100%',
    width: '75%',
    zIndex: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    pointerEvents: 'none'
  },
  headerContainer: {
    width: '50%',
    marginLeft: metrics.basePadding
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
    pointerEvents: 'auto',
    '& hover': {
      backgroundColor: colors.green
    }
  },
  sectionTwo: {
    position: 'relative',
    height: '300px',
    display: 'flex',
    zIndex: 20,
    backgroundColor: colors.white,
    justifyContent: 'center'
  },
  sectionWhiteContent: {
    position: 'absolute',
    height: '100%',
    width: '75%',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  halfWhiteContainer: {
    width: '500px',
    marginLeft: metrics.section
  },
  halfContainer: {
    width: '500px',
    marginLeft: metrics.section
  },
  sectionThreeImageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    zIndex: 10
  },
  sectionThreeImage: {
    height: '450px'
  },
  sectionTwoBoxesContainer: {
    width: '500px',
    marginLeft: metrics.section,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionTwoBox: {
    width: '200px',
    height: '300px',
    borderRadius: metrics.baseRadius,
    color: 'white',
    marginRight: metrics.smallSection,
    border: `2px solid ${colors.red}`,
    backgroundColor: colors.white,
    boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.1)'
  },
  sectionTwoBoxLong: {
    width: '220px',
    height: '375px',
    borderRadius: metrics.baseRadius,
    color: 'white',
    border: `2px solid ${colors.red}`,
    backgroundColor: colors.white,
    boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.1)'
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
    width: '95%',
    marginTop: metrics.baseLargePadding,
    color: colors.darkGray,
    fontSize: '18px',
    lineHeight: '27px'
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
    height: '500px',
    backgroundImage: 'linear-gradient(to bottom right, #5252D4, #9666A3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionThreeSectionContent: {
    position: 'absolute',
    width: '75%',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sectionThreeRightHalfContainer: {
    width: '500px',
    padding: `${metrics.section} ${metrics.section} ${metrics.section} ${metrics.section}`,
    marginLeft: metrics.section,
    border: `2px solid ${colors.yellow}`,
    borderRadius: metrics.baseRadius
  },
  sectionThreeHeading: {
    ...text.style.heading,
    color: colors.yellow
  },
  sectionThreeBodycopy: {
    ...text.style.bodycopyLarge,
    marginTop: metrics.baseLargePadding,
    fontSize: '18px',
    width: '90%',
    color: colors.white,
    lineHeight: '27px'
  },
  sectionFour: {
    height: '300px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.white,
    zIndex: 20
  },
  sectionFourContainer: {
    width: '500px',
    marginLeft: metrics.section
  },
  sectionFourButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: metrics.section,
    marginBottom: metrics.basePadding,
    flexWrap: 'wrap'
  },
  sectionFourButton: {
    ...text.style.buttonUppercase,
    height: 40,
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
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
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
  footerLeftHalfContainer: {
    width: '500px',
    marginLeft: metrics.section,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  footerRightHalfContainer: {
    width: '500px',
    marginLeft: metrics.section,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  thirdColumn: {
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  footerLogo: {
    width: '200px'
  },
  footerInformation: {
    ...text.style.subheading,
    marginTop: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.white
  },
  footerTopicTitle: {
    ...text.style.buttonUppercase,
    color: colors.black,
    marginBottom: metrics.baseLargePadding
  },
  footerTopicDescription: {
    ...text.style.bodycopy,
    color: colors.white,
    marginTop: metrics.baseLargePadding
  },
  footerImageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    zIndex: 10
  },
  footerImage: {
    height: '350px'
  },
  footerIcon: {
    position: 'relative',
    fontSize: '20px',
    top: '4px',
    marginRight: metrics.smallMargin,
    color: colors.white
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
    height: '6vw',
    zIndex: 10
    /* set height to pixels if you want angle to change with screen width */
  },
  svgTop: {
    position: 'absolute',
    top: '0',
    width: '100%',
    zIndex: 10,
    height: '6vw'
    /* set height to pixels if you want angle to change with screen width */
  }
}

export default styles
