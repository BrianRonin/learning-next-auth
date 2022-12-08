import { DefaultTheme } from './default'

export const dark_theme = {
  ...DefaultTheme,
  name: 'dark',
  colors: {
    primary: '#c3a622',
    text: '#1a1a1a',
    secondary: '#dc143c',
    primaryBg: '#bdbdbd',
    bg: '#000000',
    secondaryBg: '#464646',
    mediumGray: '#464646',
    darkGray: '#a2a2a2',
    darkBg: '#f6f6f6',
  },
} as typeof DefaultTheme
