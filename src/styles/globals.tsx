import {
  css,
  Global,
  useTheme,
} from '@emotion/react'

export const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-size: 62.5%;
          scroll-behavior: smooth;
        }
        body {
          background: ${theme.colors.bg};
          font-size: 16px;
          color: ${theme.colors.text};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 300;
          margin: ${theme.spacings.large} 0;
          color: ${theme.colors.primary};
        }
      `}
    />
  )
}
