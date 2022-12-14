import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { Directus } from '@directus/sdk'
import { Auth } from '../../../types/nextAuth'

export const directus = new Directus(
  'http://localhost:8055',
)
const get_new_token = async (
  credentials: Auth,
) => {
  const token = await directus.auth.login(
    credentials,
  )
  const expire = Date.now() + 800000
  return {
    expire,
    auth: token.access_token,
  }
}

5
export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  session: {
    maxAge: 900000,
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Email',
        },
        password: {
          placeholder: 'password',
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        if (
          !credentials?.email ||
          !credentials?.password
        )
          return null
        try {
          const token = await get_new_token(
            credentials,
          )
          if (!token?.auth) return null
          return {
            email: credentials.email,
            password: credentials.password,
          } as User
        } catch (e) {
          console.log(e)
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account && user) {
        if (account.type === 'credentials') {
          const { first_name } =
            await directus.users.me.read()
          const token = await get_new_token(
            user as Auth,
          )
          return {
            ...token,
            credentials: user,
            user: {
              name: first_name,
            },
          } as JWT
        }
      }

      if (token.expire <= Date.now()) {
        const _token = await get_new_token(
          token.credentials,
        )
        return {
          ...token,
          ..._token,
        }
      }
      return token
    },
    async session({ session, token }) {
      session.user = token.user
      session.auth = token.auth
      return session
    },
  },
})
