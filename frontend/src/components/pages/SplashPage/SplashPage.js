import React, { Component } from 'react'
import SubmitButton from '../../SubmitButton/SubmitButton'
import withStyles from 'react-jss'
import Tilt from 'react-tilt'
import styles from './SplashPage.styles.js'

class SplashPage extends Component {
  render () {
    const { classes, customClass, text } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.backgroundContent}>
          <div style={styles.backgroundContainer}>
            <div  style={styles.backgroundFadeLeftHalfContainer} />
            <div  style={styles.backgroundFadeRightHalfContainer} />
          </div>
        </div>
        <div style={styles.header}>
          <Tilt
            className="Tilt"
            options={{
              speed: 4000,
              max : 5,
              scale: 1.01,
              axis: 'y',
              reset: false
            }}
            style={styles.tiltImage} >
          </Tilt>
          <svg style={styles.svgBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,100 100,0 100,100"/>
          </svg>
          <div style={styles.content}>
            <div style={styles.headerContainer}>
              <div style={styles.subheading}>
                -----
              </div>
              <div style={styles.subheading}>
                Security vetted. Guaranteed.
              </div>
              <div style={styles.heading}>
                Ultra secure VPN. <br/> High speed, easy to use.
              </div>
              <button style={styles.headerButton}>
                DOWNLOAD FOR FREE
              </button>
            </div>
          </div>
        </div>
        <div style={styles.sectionTwo}>
          <div style={styles.sectionWhiteContent}>
            <div style={styles.sectionTwoBoxesContainer}>
              <div style={styles.sectionTwoBox}>
                <div style={styles.sectionTwoBoxUpperSection}>
                    Express Plan
                </div>
                <div style={styles.sectionTwoBoxHeading}>
                    Free
                </div>
                <div style={styles.sectionTwoBoxBottomSection}>
                  <div style={styles.sectionTwoBodySection}>
                    <div style={styles.sectionTwoBodyContainer}>
                      <div style={styles.sectionTwoTickIcon}>
                        •
                      </div>
                      Ultra Encrypted
                    </div>
                    <div style={styles.sectionTwoBodyContainer}>
                      <div style={styles.sectionTwoTickIcon}>
                        •
                      </div>
                      500mb Data cap
                    </div>
                    <div style={styles.sectionTwoBodyContainer}>
                      <div style={styles.sectionTwoTickIcon}>
                        •
                      </div>
                      No Tracking!!
                    </div>
                  </div>
                  <div style={styles.sectionTwoBoxButtonContainer}>
                    <button style={styles.sectionTwoBoxButton}>
                      Download Now
                    </button>
                  </div>
                </div>
              </div>
              <div style={styles.sectionTwoBoxLong}>
                <div style={styles.sectionTwoBoxUpperSection}>
                    Maglev Plan
                </div>
                <div style={styles.sectionTwoBoxHeading}>
                    $7.99
                    <div style={styles.sectionTwoBoxDescription}> Per Month </div>
                </div>
                <div style={styles.sectionTwoBoxBottomSectionLong}>
                  <div style={styles.sectionTwoBodySection}>
                    <div style={styles.sectionTwoBodyContainer}>
                      <div style={styles.sectionTwoTickIcon}>
                        •
                      </div>
                      Ultra Encrypted
                    </div>
                    <div style={styles.sectionTwoBodyContainer}>
                      <div style={styles.sectionTwoTickIcon}>
                        •
                      </div>
                      No Data caps
                    </div>
                    <div style={styles.sectionTwoBodyContainer}>
                      <div style={styles.sectionTwoTickIcon}>
                        •
                      </div>
                      Surf as anyone
                    </div>
                    <div style={styles.sectionTwoBodyContainer}>
                      <div style={styles.sectionTwoTickIcon}>
                        •
                      </div>
                      Cancel Anytime
                    </div>
                    <div style={styles.sectionTwoBodyContainer}>
                      <div style={styles.sectionTwoTickIcon}>
                        •
                      </div>
                      No Tracking!!
                    </div>
                  </div>
                  <div style={styles.sectionTwoBoxButtonContainer}>
                    <button style={styles.sectionTwoBoxButton}>
                      Sign Up Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div style={styles.halfWhiteContainer}>
              <div style={styles.subheading}>
                -----
              </div>
              <div style={styles.sectionHeading}>
                Get around <br/> anonymously.
              </div>
              <div style={styles.bodycopy}>
                We’re fanatical about your privacy and security. 
                Cruise the net freely without being tracked
                or hacked, using powerful encryption.
              </div>
              <button style={styles.sectionTwoButton}>
                MORE DETAILS
              </button>
            </div>
          </div>
        </div>
        <div style={styles.sectionThree}>
          <div style={styles.sectionThreeSectionContent}>
            <div style={styles.halfContainer}>
              <div style={styles.subheading}>
                XXXXXXXX
              </div>
            </div>
            <div style={styles.sectionThreeRightHalfContainer}>
              <div style={styles.subheading}>
                -----
              </div>
              <div style={styles.sectionThreeHeading}>
                How does <br/> Metro VPN work?
              </div>
              <div style={styles.sectionThreeBodycopy}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
                when an unknown printer took a galley.
              </div>
            </div>
          </div>
          <svg style={styles.svgBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,100 100,0 100,100"/>
          </svg>
          <svg style={styles.svgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,0 100,100 100,0"/>
          </svg>
        </div>
        <div style={styles.sectionFour}>
          <div style={styles.sectionWhiteContent}>
            <div style={styles.halfWhiteContainer}>
              <div style={styles.subheading}>
                -----
              </div>
              <div style={styles.sectionHeading}>
                No restrictions.
                <br/> Serious security.
              </div>
              <div style={styles.bodycopy}>
                Stream or download anything,
                from any of our servers, anywhere on Earth,
                with your IP address hidden from prying eyes.
              </div>
              <button style={styles.sectionRoundButton}>
                Get Metro VPN Now
              </button>
            </div>
            <div style={styles.halfWhiteContainer}>
              <div style={styles.subheading}>
                -----
              </div>
              <div style={styles.sectionHeading}>
                FAQ's
              </div>
              <div style={styles.sectionFourButtonContainer}>
                <button style={styles.sectionFourButton}>
                  ULTRA SECURE?
                </button>
                <button style={styles.sectionFourButton}>
                  SPEED
                </button>
                <button style={styles.sectionFourButton}>
                  GUARANTEES
                </button>
              </div>
              <div style={styles.bodycopy}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>
        <div style={styles.footer}>
          <div style={styles.footerContent}>
            <div style={styles.footerLeftHalfContainer}>
              <div style={styles.sectionHeading}>
                <img className={classes.footerLogo} src='/metro-logo@2x.png' />
              </div>
              <div style={styles.footerInformation}>
                — 3rd Party Verified
              </div>
              <div style={styles.footerInformation}>
                — Proudly New Zealand Owned
              </div>
              <div style={styles.footerInformation}>
                — 0800 55 55 55
              </div>
            </div>
            <div style={styles.footerRightHalfContainer}>
              <div style={styles.thirdColumn}>
                <div style={styles.footerTopicTitle}>
                  EXPLORE
                </div>
                <div style={styles.footerTopicDescription}>
                  Plans
                </div>
                <div style={styles.footerTopicDescription}>
                  Download
                </div>
              </div>
              <div style={styles.thirdColumn}>
                <div style={styles.footerTopicTitle}>
                  COMPANY
                </div>
                <div style={styles.footerTopicDescription}>
                  FAQs
                </div>
                <div style={styles.footerTopicDescription}>
                  Support
                </div>
                <div style={styles.footerTopicDescription}>
                  About Us
                </div>
                <div style={styles.footerTopicDescription}>
                  Careers
                </div>
              </div>
              <div style={styles.thirdColumn}>
                <div style={styles.footerTopicTitle}>
                  T&Cs
                </div>
                <div style={styles.footerTopicDescription}>
                  Terms & Conditions
                </div>
                <div style={styles.footerTopicDescription}>
                  Legal
                </div>
              </div>
            </div>
          </div>
          <svg style={styles.svgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,0 100,100 100,0"/>
          </svg>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SplashPage)
