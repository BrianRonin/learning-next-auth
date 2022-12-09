import { onError } from '@apollo/client/link/error'
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client'

const system = createHttpLink({
  uri: 'http://localhost:8055/graphql/system',
})

const base = createHttpLink({
  uri: 'http://localhost:8055/graphql',
})

const authLink = new ApolloLink(
  (operation, forward) => {
    if (!operation.getContext().auth)
      return forward(operation)
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        Authorization:
          'Bearer ' + operation.getContext().auth, // however you get your token
      },
    }))
    return forward(operation)
  },
).split(
  (op) => op.getContext().system,
  system,
  base,
)

export const Client = new ApolloClient({
  link: from([authLink]),
  cache: new InMemoryCache(),
})
