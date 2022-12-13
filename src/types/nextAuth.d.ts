import { ApolloClient } from '@apollo/client'
import {
  AuthCredentials,
  AuthResult,
} from '@directus/sdk'
import NextAuth, {
  DefaultSession,
} from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { UserDirectus } from '../pages/api/auth/[...nextauth]'

export type Auth = {
  email: string
  password: string
}

declare module 'next-auth' {
  interface User extends UserDirectus {}
  interface Session {
    auth: string | null
    user: {
      name: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    class: UserDirectus
    auth: string | null
    user: {
      name: string
    }
  }
}
