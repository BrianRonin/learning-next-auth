import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globals'
import { Roboto } from '@next/font/google'
import { Theme } from '../contexts/theme/theme'
import {
  SessionProvider,
  useSession,
} from 'next-auth/react'
import { ReactNode, useEffect } from 'react'
import {
  ApolloProvider,
  from,
} from '@apollo/client'
import {
  AuthLink,
  Client,
} from '../api/graphql/apollo_client'
import { ContextPost } from './../contexts/updatePost/updatePost'
import { Session } from 'next-auth'

const SetLinkClient = ({
  children,
}: {
  children: ReactNode
}) => {
  const { data, status } = useSession()
  data?.auth &&
    Client.setLink(
      from(
        AuthLink({
          auth: data.auth,
        } as Session),
      ),
    )

  return <>{children}</>
}

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
        {/* <SetLinkClient> */}
        <Theme>
          <GlobalStyles />
          <ContextPost>
            <main className={myFont.className}>
              <Component {...pageProps} />
            </main>
          </ContextPost>
        </Theme>
        {/* </SetLinkClient> */}
      </ApolloProvider>
    </SessionProvider>
  )
}
