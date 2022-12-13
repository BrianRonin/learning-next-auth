import { SetStateAction, useEffect } from 'react'
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
} from 'react'
import { Post } from '../../types/post'

export const C_Post = createContext<{
  post?: Post
  setPost?: Dispatch<SetStateAction<Post>>
}>({})

type contextPostProps = {
  children: ReactNode
}

export const ContextPost = ({
  children,
}: contextPostProps) => {
  const [post, setPost] = useState<Post>({})
  useEffect(() => {
    console.log('post: ' + JSON.stringify(post))
  }, [post])
  return (
    <C_Post.Provider value={{ post, setPost }}>
      {children}
    </C_Post.Provider>
  )
}
