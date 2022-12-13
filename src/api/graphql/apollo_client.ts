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
      const token = isAdm
        ? auth
        : '3m3Z3tVlk-9ZTwyRHoYj4WCLHQctWYZV'
      operation.setContext(
        ({ headers }: any) => ({
          headers: {
            ...headers,
            Authorization: 'Bearer ' + token, // however you get your token
          },
        }),
      )
      return forward(operation)
    },
  )
  const httpLink = new HttpLink({
    uri: 'http://localhost:8055/graphql',
  })
  return [apolloLink, httpLink]
}
// .split(
//   (op) => op.getContext().system,
//   system,
//e   base,

export const Client = new ApolloClient({
  link: from(AuthLink()),
  cache: new InMemoryCache(),
  ssrMode: true,
})
