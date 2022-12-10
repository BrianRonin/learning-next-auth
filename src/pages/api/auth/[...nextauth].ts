import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import {
  Client,
  getToken,
} from '../../../api/graphql/apollo_client'
import { query_me } from '../../../api/graphql/Auth/queries'
import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { Auth } from '../../../types/nextAuth'

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
        const credential = {
          email: credentials.email,
          password: credentials.password,
        }
        try {
          const token = await getToken(credential)
          if (typeof token !== 'string')
            return null
          return credential as User
        } catch (e) {
          console.log(e)
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({
      token,
      user,
      account,
      profile,
      isNewUser,
    }) => {
      if (account && user) {
        console.log(
          'user: ' + JSON.stringify(user),
        )
        if (account.type === 'credentials') {
          const { data } = await Client(
            {
              mutate: {
                mutation: query_me,
                context: {
                  system: true,
                },
              },
            },
            user as Auth,
          )
          console.log(
            'data: ' + JSON.stringify(data),
          )

          return {
            auth: user,
            user: {
              name: data.users_me.first_name,
            },
          } as JWT
        }
      }
      return token
    },
    async session({ session, token, user }) {
      session.user = token.user
      session.auth = token.auth
      return session
    },
  },
})
