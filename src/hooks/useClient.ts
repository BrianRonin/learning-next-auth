import {
  ApolloCache,
  DefaultContext,
  MutationOptions,
  OperationVariables,
  QueryOptions,
} from '@apollo/client'
import { useSession } from 'next-auth/react'
import {
  getToken,
  _Client,
} from '../api/graphql/apollo_client'
import { Auth } from '../types/nextAuth'
export const useClient = () => {
  const Client = async (
    props?: {
      mutate?: MutationOptions<
        any,
        OperationVariables,
        DefaultContext,
        ApolloCache<any>
      >
      query?: QueryOptions<any>
    },
    auth?: Auth | 'Client',
  ): Promise<any> => {
    let token = null
    const method = props?.mutate
      ? 'mutate'
      : 'query'
    if (auth === 'Client') {
      // eslint-disable-next-line
      const { data } = useSession()
      if (!data?.auth) return
      token = await getToken(data?.auth)
    } else if (auth) {
      token = await getToken(auth)
    }
    // @ts-ignore
    return _Client[method]({
      // @ts-ignore
      ...props[method],
      context: {
        auth: token,
        // @ts-ignore
        ...props[method]?.context,
      },
    })
  }
  return [Client]
}
