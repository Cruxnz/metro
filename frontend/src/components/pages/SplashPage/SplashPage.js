import React, { Component } from 'react'
import SubmitButton from '../../SubmitButton/SubmitButton'
import withStyles from 'react-jss'
import styles from './SplashPage.styles.js'

class SplashPage extends Component {
  render () {
    const { classes, customClass, text } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.header}>
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
          <div style={styles.sectionTwoContent}>
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
            <div style={styles.sectionTwoRightContainer}>
              <div style={styles.subheading}>
                -----
              </div>
              <div style={styles.sectionTwoHeading}>
                Get around <br/> anonymously.
              </div>
              <div style={styles.sectionTwoBodycopy}>
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
          <h1 style={styles.h1}>Header Content</h1>
          <svg style={styles.svgBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,100 100,0 100,100"/>
          </svg>
          <svg style={styles.svgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,0 100,100 100,0"/>
          </svg>
        </div>
        <div style={styles.sectionFour}>
          <h1>Second section</h1>
        </div>
        <div style={styles.footer}>
          <h1>Footer</h1>
          <svg style={styles.svgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill='white' points="0,0 100,100 100,0"/>
          </svg>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SplashPage)
