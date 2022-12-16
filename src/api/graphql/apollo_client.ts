import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { Session } from 'next-auth'

export const AuthLink = (session?: Session) => {
  const apolloLink = new ApolloLink(
    (operation, forward) => {
      const auth = operation.getContext().auth
      const isAdm = operation.getContext().isAdm
      const token = () => {
        const template = (token: string) => {
          return {
            Authorization: 'Bearer ' + token,
          }
        }
        if (isAdm || auth)
          return isAdm
            ? template(
                process.env
                  .DIRECTUS_ADM_TOKEN as string,
              )
            : template(auth)
        return {}
      }
      console.log(
        'SEU AUTH: ' + JSON.stringify(token()),
      )
      operation.setContext(
        ({ headers }: any) => ({
          headers: {
            ...headers,
            ...token(), // however you get your token
          },
        }),
      )
      return forward(operation)
    },
  ).split(
    (op) => op.getContext().system,
    new HttpLink({
      uri: 'http://localhost:8055/graphql/system',
    }),
    new HttpLink({
      uri: 'http://localhost:8055/graphql',
    }),
  )
  return [apolloLink]
}
// .split(
//   (op) => op.getContext().system,
//   system,
//e   base,

export const Client = new ApolloClient({
  link: from(AuthLink()),
  cache: new InMemoryCache(),
})
