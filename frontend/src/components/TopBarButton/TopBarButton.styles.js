import { text, colors, metrics } from '../../common/constants/'

const styles = {
  button: {
    ...text.style.buttonLowercase,
    fontSize: '14px',
    borderRadius: metrics.circleButton,
    border: `${metrics.borderBaseWidth} solid ${colors.green}`,
    backgroundColor: 'transparent',
    color: colors.green,
    padding: '5px 20px',
  }
}

export default styles
