import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import {
  AuthResult,
  Directus,
  IAuth,
  UserType,
} from '@directus/sdk'
import { Auth } from '../../../types/nextAuth'

export const directus = new Directus(
  'http://localhost:8055',
)
const GET_ = async (user) => {
  const { first_name } = await user.me
  const { access_token } = await user.token
  return {
    class: user,
    auth: access_token,
    user: {
      name: first_name,
    },
  } as JWT
}
export class UserDirectus {
  constructor(
    public email: string,
    public password: string,
    public directus: Directus<any>,
    public expires: number,
  ) {}
  get refresh() {
    return this.directus.auth.refresh()
    // return directus.auth.refresh()
  }
  get token() {
    return this.directus.auth.login({
      email: this.email,
      password: this.password,
    })
    // return directus.auth.login({
    //   email: this.email,
    //   password: this.password,
    // })
  }
  get me() {
    return this.directus.users.me.read()
    // return directus.users.me.read()
  }
}

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
        const user = new UserDirectus(
          credentials.email,
          credentials.password,
          directus,
          800 + Date.now(),
        )
        try {
          const token = await user.token
          if (!token?.access_token) return null
          return user as User
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
          const { first_name } = await user.me
          const { access_token } =
            await user.token
          return {
            class: user,
            auth: access_token,
            user: {
              name: first_name,
            },
          } as JWT
        }
      }
      // if (token.class.expires <= Date.now()) {
      //   return {
      //     ...token,
      //     auth: await directus.auth.login({
      //       email: token.class.email,
      //       password: token.class.password,
      //     }),
      //   }
      // }
      return {
        ...token,
        auth: await directus.auth.login({
          email: token.class.email,
          password: token.class.password,
        }),
      }
    },
    async session({ session, token }) {
      session.user = token.user
      session.auth = token.auth
      return session
    },
  },
})
