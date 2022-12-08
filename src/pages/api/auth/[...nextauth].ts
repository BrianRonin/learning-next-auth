import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { Client } from '../../../api/graphql/apollo_client'
import { auth } from '../../../api/graphql/Auth/mutations'
import { query_me } from '../../../api/graphql/Auth/queries'

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  session: {
    maxAge: 7 * 24 * 60 * 60,
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
        const user = null
        try {
          const { data: _jwt } =
            await Client.mutate({
              mutation: auth,
              variables: {
                email: credentials?.email,
                password: credentials?.password,
              },
              context: { clientName: 'system' },
            })
          if (!_jwt.auth_login) return null
          // const { data } =
          //   await apollo_client_system.mutate({
          //     mutation: query_me,

          //   })
          console.log(
            '_jwt_: ' + JSON.stringify(_jwt),
          )
          return _jwt.auth_login
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
      const isSignIn = !!user
      function Log() {
        console.log(
          '__________ v _____________\n',
        )
        console.log(
          'token: ' + JSON.stringify(token),
        )
        console.log(
          'user: ' + JSON.stringify(user),
        )
        console.log(
          'account: ' + JSON.stringify(account),
        )
        console.log(
          'profile: ' + JSON.stringify(profile),
        )
        console.log(
          'isNewUser: ' +
            JSON.stringify(isNewUser),
        )
        console.log(isSignIn)
        console.log(
          '__________ /\\ _____________\n',
        )
      }
      Log()

      const actualDateInSeconds = Math.floor(
        Date.now() / 1000,
      )
      const tokenExpirationInSeconds = Math.floor(
        7 * 24 * 60 * 60,
      )

      if (account && user) {
        if (account.type === 'credentials') {
          return {
            ...token,
            ...user,
          }
        }
      }
      return token
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        ...token,
      }
      return session
    },
  },
})
