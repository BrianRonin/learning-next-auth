import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'

// export const apollo_client = new ApolloClient({
//   uri: 'localhost:8055/graphql/',
//   cache: new InMemoryCache(),
// })
export const apollo_client_system =
  new ApolloClient({
    uri: 'http://localhost:8055/graphql/system',
    cache: new InMemoryCache(),
  })
