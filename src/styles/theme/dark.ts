import { DefaultTheme } from './default'

export const dark_theme = {
  ...DefaultTheme,
  name: 'dark',
  colors: {
    primary: '#aa9e6a',
    text: '#cecece',
    secondary: '#dc143c',
    primaryBg: '#bdbdbd',
    bg: '#000000',
    secondaryBg: '#464646',
    mediumGray: '#464646',
    darkGray: '#a2a2a2',
    darkBg: '#606060',
  },
} as typeof DefaultTheme
