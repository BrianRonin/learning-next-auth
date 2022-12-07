import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { apollo_client_system } from '../../../api/graphql/apollo_client'
import { auth } from '../../../api/graphql/Auth/mutations'
export default NextAuth({
  secret: 'foleaijfilaejigh',
  session: {
    maxAge: 7 * 24 * 60 * 60,
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
          const { data } =
            await apollo_client_system.mutate({
              mutation: auth,
              variables: {
                email: credentials?.email,
                password: credentials?.password,
              },
            })
          if (!data.auth_login)
            throw new Error('No Login')

          return data
        } catch (e) {
          console.log(e)
          return null
        }
      },
    }),
  ],
})
