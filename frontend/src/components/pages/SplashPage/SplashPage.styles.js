import { text, colors } from '../../../common/constants/'

const styles = {
  container: {
    display: '',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.purple
  },
  header: {
    position: 'relative',
    height: '300px',
    backgroundImage: 'linear-gradient(#5252D4, #9666A3)'
  },
  h1: {
    textAlign: 'center',
    color: 'white'
  },
  svg: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '5vw'
    /* set height to pixels if you want angle to change with screen width */
  }
}

export default styles
