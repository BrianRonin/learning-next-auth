import NextAuth, {
  DefaultSession,
} from 'next-auth'
import { JWT } from 'next-auth/jwt'

type Auth = {
  access_token: string
  refresh_token: string
  expires: number
  __typename: string
}

declare module 'next-auth' {
  interface User extends Auth {}
  interface Session {
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends Auth {}
}
