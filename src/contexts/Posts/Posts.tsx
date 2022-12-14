import {
  useLazyQuery,
  useQuery,
} from '@apollo/client'
import { useSession } from 'next-auth/react'
import { SetStateAction, useEffect } from 'react'
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
} from 'react'
import { getAllPosts } from '../../api/graphql/Post/queries'
import { Post } from '../../types/post'

type C_PostProps = {
  post: Post | {}
  setPost: Dispatch<SetStateAction<Post | {}>>
  posts: Post[] | []
  setPosts: Dispatch<SetStateAction<Post[] | []>>
}

export const C_Post = createContext<C_PostProps>(
  {} as C_PostProps,
)

type contextPostProps = {
  children: ReactNode
}

export const ContextPost = ({
  children,
}: contextPostProps) => {
  const [post, setPost] = useState<Post | {}>({})
  const [posts, setPosts] = useState<Post[] | []>(
    [],
  )
  const { data, status } = useSession()

  const [getPosts] =
    useLazyQuery<{
      post: Post[]
    }>(getAllPosts)

  useEffect(() => {
    console.log(data)
    if (status === 'authenticated') {
      getPosts({
        context: { auth: data.auth },
      }).then(({ data }) => {
        if (!data?.post) return
        setPosts(data.post)
      })
    }
  }, [status])

  return (
    <C_Post.Provider
      value={{ post, setPost, posts, setPosts }}
    >
      {children}
    </C_Post.Provider>
  )
}
