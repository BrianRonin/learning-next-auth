import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { Auth } from '../../../types/nextAuth'
import { directus } from '../../../api/directus'
import { Client } from '../../../api/graphql/apollo_client'
import { query_user } from '../../../api/graphql/Auth/queries'

const get_new_token = async (
  credentials: Auth,
) => {
  const expire = Date.now() + 800000
  try {
    const token = await directus.auth.login(
      credentials,
    )
    console.log('TOKEN: ' + token)
    return {
      expire,
      auth: token.access_token,
    }
  } catch (e) {
    //
    return null
  }
}

const loginDirectus = async (user: Auth) => {
  const token = await get_new_token(user as Auth)
  const { first_name, avatar } =
    await directus.users.me.read()

  return {
    ...token,
    credentials: user,
    user: {
      name: first_name,
      avatar,
    },
  } as JWT
}

type UseInfoGoogle = {
  id: string
  email: string
  verified_email: boolean
  name: string
  given_name: string
  family_name: string
  picture: string
  locale: string
}
export default NextAuth({
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login', // Error code passed in query string as ?error=
    verifyRequest: '/login', // (used for check email message)
    newUser: '/login', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
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
          //
          return null
        }
      },
    }),
    GoogleProvider({
      clientId: process.env
        .NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env
        .NEXT_PUBLIC_GOOGLE_SECRET_AUTH as string,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account && user) {
        if (account.type === 'credentials') {
          try {
            const jwt = await loginDirectus(
              user as Auth,
            )
            return jwt
          } catch (e) {
            //
            return null
          }
        } else if (
          account.provider === 'google'
        ) {
          const userInfo = (await fetch(
            'https://www.googleapis.com/oauth2/v2/userinfo',
            {
              headers: {
                Authorization: `Bearer ${account.access_token}`,
              },
            },
          ).then((r) =>
            r.json(),
          )) as UseInfoGoogle
          console.log(
            'account Google: ' +
              JSON.stringify(account),
          )
          if (!userInfo.email) return
          const isNewUser = await Client.query<{
            users: any[]
          }>({
            query: query_user,
            variables: { email: userInfo.email },
            context: {
              isAdm: true,
              system: true,
            },
          }).then(
            ({ data: { users } }) =>
              users.length === 0,
          )

          const response = await fetch(
            `http://localhost:8055/auth/login/google/callback?code=${encodeURI(
              account.access_token as string,
            )}&scope=${encodeURI(
              account.scope as string,
            )}`,
          )
          console.log(response)
          // if (isNewUser) {
          //   try {
          //     await directus.users.createOne({
          //       email: userInfo.email,
          //       password:
          //         process.env.NEXTAUTH_SECRET,
          //       first_name: userInfo.name,
          //       role: process.env
          //         .DIRECTUS_ROLE_USER,
          //       avatar: userInfo.picture,
          //     })
          //   } catch (e) {
          //     return null
          //   }
          // }
          return null
          // try {
          //   const jwt = await loginDirectus({
          //     email: userInfo.email,
          //     password: process.env
          //       .NEXTAUTH_SECRET as string,
          //   })
          //   return jwt
          // } catch (e) {
          //   return null
          // }
        }
      }
      console.log(
        'Account: ' + JSON.stringify(account),
      )
      // console.log(
      //   'User: ' + JSON.stringify(account),
      // )
      // console.log(
      //   'Token: ' + JSON.stringify(account),
      // )

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
