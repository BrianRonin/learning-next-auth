import { from, useQuery } from '@apollo/client'
import {
  getSession,
  useSession,
} from 'next-auth/react'
import { useEffect, useState } from 'react'
import {
  AuthLink,
  Client,
} from '../api/graphql/apollo_client'
import { getAllPosts } from '../api/graphql/Post/queries'
import { Posts as T_Posts } from '../templates/POST/Posts/Posts'
export default function Posts(ctx) {
  const session = useSession()
  const { data = { post: [] } } = useQuery(
    getAllPosts,
    { context: { auth: session.data?.auth } },
  )
  return <T_Posts posts={data.post} />
}

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx)
//   if (!session?.auth)
//     return { props: { posts: [] } }
//   try {
//     Client.setLink(from(AuthLink(session)))
//     const { data } = await Client.query({
//       query: getAllPosts,
//     })
//     console.log('FIZ O FETCH LAAAA')
//     console.log('data: ' + JSON.stringify(data))

//     return {
//       props: {
//         posts: await data,
//       },
//     }
//   } catch (e) {
//     console.log(e)
//     return { props: {} }
//   }
// }
