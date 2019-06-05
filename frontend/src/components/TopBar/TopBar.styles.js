import { text, colors, metrics } from '../../common/constants/'

const styles = {
  outer: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
  container: {
    padding: metrics.basePadding,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: metrics.section
  },
  logo: {
    width: '180px'
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: metrics.section
  },
  link: {
    ...text.style.bodycopySmall,
    color: colors.white,
    marginRight: metrics.section
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: metrics.section
  },
  button: {
    ...text.style.buttonLowercase,
    color: colors.green,
    border: '1px solid',
    borderRadius: metrics.circleButton,
    borderColor: colors.green,
    borderWidth: metrics.borderBaseWidth, 
    padding: '4px 30px 6px 30px',
    marginRight: metrics.basePadding
  }
}

export default styles
