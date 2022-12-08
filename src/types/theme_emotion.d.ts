import { DefaultTheme } from '../styles/theme/default'

type tTheme = typeof DefaultTheme

declare module '@emotion/react' {
  export interface Theme extends tTheme {}
}
