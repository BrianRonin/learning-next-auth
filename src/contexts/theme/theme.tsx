import { ThemeProvider } from '@emotion/react'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { dark_theme } from '../../styles/theme/dark'
import { DefaultTheme } from '../../styles/theme/default'

export type theme_provider_props = {
  children: ReactNode
  _theme?: typeof DefaultTheme
}

export type theme_context_values = {
  theme: typeof DefaultTheme
  setTheme: (mode: 'light' | 'dark') => void
}

export const theme_context =
  createContext<theme_context_values>({
    theme: DefaultTheme,
    setTheme: (x) => x,
  })

export const Theme = ({
  children,
  _theme,
}: theme_provider_props) => {
  const [theme, setTheme] = useState(
    _theme ? _theme : DefaultTheme,
  )

  useEffect(() => {
    const localTheme =
      localStorage.getItem('theme')
    if (!localTheme) return
    const newTheme = JSON.parse(localTheme)
    setTheme(newTheme)
  }, [])

  const handle_set_theme: theme_context_values['setTheme'] =
    useCallback((mode) => {
      switch (mode) {
        case 'dark':
          setTheme(dark_theme)
          localStorage.setItem(
            'theme',
            JSON.stringify(dark_theme),
          )
          break
        default:
          setTheme(DefaultTheme)
          localStorage.setItem(
            'theme',
            JSON.stringify(DefaultTheme),
          )
          break
      }
    }, [])

  return (
    <theme_context.Provider
      value={{
        theme,
        setTheme: handle_set_theme,
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </theme_context.Provider>
  )
}
