import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  HttpLink,
  InMemoryCache,
  useQuery,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import {
  SessionContext,
  useSession,
} from 'next-auth/react'

// export const apollo_client = new ApolloClient({
//   uri: 'localhost:8055/graphql/',
//   cache: new InMemoryCache(),
// })

const AuthLink = setContext((_, { headers }) => {
  const session = useSession()
  const token = session.data?.user.access_token

  return {
    headers: {
      ...headers,
      authorization: token
        ? `Bearer ${token}`
        : '',
    },
  }
})

//Declare your endpoints
const system = createHttpLink({
  uri: 'http://localhost:8055/graphql/system',
  ...AuthLink,
})

const base = createHttpLink({
  uri: 'http://localhost:8055/graphql',
  ...AuthLink,
})

// pass them to apollo-client config
export const Client = new ApolloClient({
  link: ApolloLink.split(
    (operation) =>
      operation.getContext().clientName ===
      'system',
    system, //if above
    base,
  ),
  cache: new InMemoryCache(),
})
//pass client name in query/mutation
// useQuery(QUERY, {variables, context: {clientName: 'endpoint2'}})

// export const apollo_client_system =
//   new ApolloClient({
//     link: authLink.concat(system),
//     cache: new InMemoryCache(),
//   })

// export const apollo_client = new ApolloClient({
//   link: authLink.concat(base),
//   cache: new InMemoryCache(),
// })
