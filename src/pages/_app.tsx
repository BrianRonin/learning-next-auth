import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globals'
import { Roboto } from '@next/font/google'
import { Theme } from '../contexts/theme/theme'
import { SessionProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import { Client } from '../api/graphql/apollo_client'
import { ContextPost } from '../contexts/posts/posts'
import { ContextLoadingRoute } from '../contexts/loading_route/loading_route'

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
      <ApolloProvider client={Client}>
        <Theme>
          <GlobalStyles />
          <ContextPost>
            <main className={myFont.className}>
              <Component {...pageProps} />
            </main>
          </ContextPost>
        </Theme>
      </ApolloProvider>
    </SessionProvider>
  )
}
