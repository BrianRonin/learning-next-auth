import { getSession } from 'next-auth/react'
import { Client } from '../api/graphql/apollo_client'
import { getAllPosts } from '../api/graphql/Post/queries'
import { Posts as T_Posts } from '../templates/POST/Posts/Posts'
export default function Posts(ctx) {
  console.log(ctx)
  return <T_Posts posts={ctx?.posts?.post} />
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  if (!session) return { props: {} }
  try {
    const { data, networkStatus } = await Client(
      { query: { query: getAllPosts } },
      session.auth,
    )

    return {
      props: {
        posts: data,
      },
    }
  } catch (e) {
    console.log(e)
    return { props: {} }
  }
}
