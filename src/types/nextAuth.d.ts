import { ApolloClient } from '@apollo/client'
import NextAuth, {
  DefaultSession,
} from 'next-auth'
import { JWT } from 'next-auth/jwt'

export type Auth = {
  email: string
  password: string
}

declare module 'next-auth' {
  interface User extends Auth {}
  interface Session {
    auth: Auth
    user: {
      name: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    auth: Auth
    user: {
      name: string
    }
  }
}
