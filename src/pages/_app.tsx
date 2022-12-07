import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globals'
import { Roboto } from '@next/font/google'
import { Theme } from '../contexts/theme/theme'
import { SessionProvider } from 'next-auth/react'

const myFont = Roboto({
  style: ['normal', 'italic'],
  weight: ['100', '300', '500', '900'],
  subsets: ['latin'],
})

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Theme>
        <GlobalStyles />
        <main className={myFont.className}>
          <Component {...pageProps} />
        </main>
      </Theme>
    </SessionProvider>
  )
}
