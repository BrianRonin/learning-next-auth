import {
  ApolloCache,
  ApolloClient,
  ApolloLink,
  createHttpLink,
  DefaultContext,
  from,
  InMemoryCache,
  MutationOptions,
  OperationVariables,
  QueryOptions,
} from '@apollo/client'
import { auth } from './Auth/mutations'
import { Auth } from '../../types/nextAuth'

const system = createHttpLink({
  uri: 'http://localhost:8055/graphql/system',
})

const base = createHttpLink({
  uri: 'http://localhost:8055/graphql',
})

const authLink = new ApolloLink(
  (operation, forward) => {
    const _token = operation.getContext().auth
    const token = _token
      ? _token
      : '3m3Z3tVlk-9ZTwyRHoYj4WCLHQctWYZV'
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        Authorization: 'Bearer ' + token, // however you get your token
      },
    }))
    return forward(operation)
  },
).split(
  (op) => op.getContext().system,
  system,
  base,
)

export const getToken = async (credentials: {
  email: string
  password: string
}): Promise<string> => {
  const { data } = await _Client.mutate({
    mutation: auth,
    variables: credentials,
    context: { system: true },
  })
  return data.auth_login.access_token
}

export const _Client = new ApolloClient({
  link: from([authLink]),
  cache: new InMemoryCache(),
})
_Client.query

export const Client = async (
  action?: {
    mutate?: MutationOptions<
      any,
      OperationVariables,
      DefaultContext,
      ApolloCache<any>
    >
    query?: QueryOptions<any>
  },
  auth?: Auth,
): Promise<any> => {
  let token = null
  const method = action?.mutate
    ? 'mutate'
    : 'query'
  if (auth) token = await getToken(auth)
  // @ts-ignore
  return _Client[method]({
    // @ts-ignore
    ...action[method],
    context: {
      auth: token,
      // @ts-ignore
      ...action[method]?.context,
    },
  })
}
