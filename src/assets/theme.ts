// Units

const spacing = {
  none: 0,
  xxsmall: '4px',
  /** 8px */
  xsmall: '8px',
  /** 12px */
  small: '12px',
  /** 20px */
  medium: '20px',
  /** 24px */
  gutter: '24px',
  /** 32px */
  large: '32px',
  /** 48px */
  xlarge: '48px',
  /** 96px */
  xxlarge: '96px',
  section: {
    /** 24px */
    smallest: '24px',
    /** 32px */
    xxxsmall: '32px',
    /** 48px */
    xxsmall: '48px',
    /** 56px */
    xsmall: '56px',
    /** 64px */
    small: '64px',
    /** 80px */
    medium: '80px',
    /** 96px */
    large: '96px',
    /** 128px */
    xlarge: '128px',
  },
}

const fontSizes = {
  xsmall: '0.75rem',
  small: '0.875rem',
  medium: '1rem',
  large: '1.125rem',
  xlarge: '1.266rem',
  xxlarge: '1.375rem',
  xxxlarge: '1.424rem',
}

const lineHeight = {
  small: '.8',
  medium: '1',
  large: '1.2',
  xlarge: '1.5',
}

export const breakpoints = {
  xs: 360,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1160, // container max width
}

export const mq = Object.keys(breakpoints).reduce((acc, elem) => {
  acc[elem] = `@media (min-width: ${breakpoints[elem]}px)`
  return acc
}, {})

const colors = {
  brand: {
    /** #F6F5FE */
    accentLightest: '#F6F5FE',
    /** #D5D1FC */
    accentLightMedium: '#D5D1FC',
    /** #695FF6 */
    accentLight: '#695FF6',
    /** #5048C7 */
    accent: '#5048C7',
    /** #413AA1 */
    accentDark: '#413AA1',
    /** #150855 */
    accentDarker: '#150855',
    /** #130952 */
    accentDarkest: '#130952',
  },
  text: {
    white: '#fff',
    light: '#84839C',
    gray: '#736e84',
    regular: '#585769',
    dark: '#110F33',
  },
  surface: {
    /** #ffffff */
    default: '#ffffff',
    /** #F5F5F7 */
    background: '#F5F5F7',
    /** #D7D7DE */
    border: '#D7D7DE',
    /** #e8e7eb */
    borderLight: '#e8e7eb',
    /** #EEECFE */
    accent: '#EEECFE',
  },
}

// Theme
// Legacy palette
const palette = {
  common: {
    white: '#fff',
    black: '#000',
  },
  primary: {
    darker: '#5835c5',
    default: '#623cdc',
    defaultLighter: '#766cff',
    light: '#D5D1FF',
    xlight: '#dfd8f8',
    xxlight: '#f6f5fd',
  },
  secondary: {
    default: '#160e33',
    light: '#150855',
  },
  gray: {
    default: '#736e84',
    light: '#e8e7eb',
    medium: '#a19ead',
    dark: '#585769',
    darker: '#110F33',
  },
}

const shadows = {
  0: 'none',
  1: '0 0 16px rgb(0 0 0 / 15%)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)',
}

const transition = {
  0: 'none',
  1: 'all 0.15s ease-in-out',
  2: 'all 0.4s ease-in-out',
}

const typography = {
  base: `Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  heading: `Heebo, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
}

const shape = {
  borderRadius: spacing['xxsmall'],
}

export const theme = {
  spacing,
  fontSizes,
  lineHeight,
  colors,
  palette,
  shadows,
  transition,
  typography,
  shape,
  breakpoints,
}
