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
        ? '3m3Z3tVlk-9ZTwyRHoYj4WCLHQctWYZV'
        : auth
      console.log('SEU AUTH: ' + auth)
      operation.setContext(
        ({ headers }: any) => ({
          headers: {
            ...headers,
            authorization: 'bearer ' + token, // however you get your token
          },
        }),
      )
      return forward(operation)
    },
  )
  const httpLink = new HttpLink({
    uri: 'http://179.159.233.150:8055/graphql',
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
