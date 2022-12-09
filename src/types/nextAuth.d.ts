import { ApolloClient } from '@apollo/client'
import NextAuth, {
  DefaultSession,
} from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    access_token: string
    refresh_token: string
    expires: number
    __typename: string
  }
  interface Session {
    token: string
    user: {
      name: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    auth: {
      access_token: string
      refresh_token: string
      expires: number
      __typename: string
    }
    user: {
      name: string
    }
  }
}
