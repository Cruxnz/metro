import colors from './colors'

export const headerFont = '\'GelionBold\', sans-serif'
export const buttonFont = '\'CeraMedium\', sans-serif'
export const bodyFont = '\'GelionRegular\', sans-serif'

const type = {
  altBase: '\'CeraMedium\', sans-serif',
  base: '\'GelionRegular\', sans-serif',
  bold: '\'GelionBold\', sans-serif'
}

// Consider changing 'height' to 'width' for better accuracy

const size = {
  heading: '40px',
  subheading: '18px',
  bodycopySmall: '13px',
  bodycopy: '14px',
  bodycopyLarge: '16px',
  inputLabel: '10px',
  input: '20px',
  buttonUppercase: '12px',
  buttonLowercase: '14px',
  errorText: '12px',
  errorHeading: '16px',
  iconBase: '18px'
}

const spacing = {
  label: '3px',
  buttonLowercase: '.5px',
  buttonUppercase: '4px'
}

const style = {
  heading: {
    fontFamily: type.bold,
    fontSize: size.heading,
    color: colors.white
  },
  subheading: {
    fontFamily: type.base,
    fontSize: size.subheading,
    color: colors.black
  },
  bodycopySmall: {
    fontFamily: type.base,
    fontSize: size.bodycopySmall
  },
  bodycopy: {
    fontFamily: type.base,
    fontSize: size.bodycopy,
    color: colors.black
  },
  bodycopyLarge: {
    fontFamily: type.base,
    fontSize: size.bodycopyLarge,
    color: colors.black
  },
  inputLabel: {
    fontFamily: type.base,
    fontSize: size.inputLabel,
    letterSpacing: spacing.label,
    color: colors.subtitle
  },
  input: {
    fontFamily: type.base,
    fontSize: size.input
  },
  buttonUppercase: {
    fontFamily: type.altBase,
    fontSize: size.buttonUppercase,
    textTransform: 'uppercase',
    letterSpacing: spacing.buttonUppercase
  },
  buttonLowercase: {
    fontFamily: type.base,
    fontSize: size.buttonLowercase
  }
}

export default {
  type,
  size,
  spacing,
  style
}