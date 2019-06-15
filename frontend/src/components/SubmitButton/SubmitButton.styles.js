import { text, metrics, colors } from '../../common/constants/'

const styles = {
  button: {
    ...text.style.buttonUppercase,
    marginTop: metrics.basePadding,
    height: 40,
    width: '100%',
    borderRadius: metrics.baseRadius,
    color: 'white',
    backgroundColor: colors.red,
    letterSpacing: 4
  }
}

export default styles
