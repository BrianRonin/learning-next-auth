import * as S from './S.card'
import { IoMdClose } from 'react-icons/io'
import { BsPen } from 'react-icons/bs'
import { deletePost } from '../../api/graphql/Post/mutations'
import { useSession } from 'next-auth/react'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { C_Post } from '../../contexts/posts/posts'
import { useMutation } from '@apollo/client'
export type cardProps = {
  content: string
  title: string
  id: number
}

export const Card = ({
  content,
  title,
  id,
}: cardProps) => {
  const { data } = useSession()
  const router = useRouter()
  const { setPost, setPosts } = useContext(C_Post)
  const [_deletePost] = useMutation(deletePost)
  if (!data?.auth) return null

  const handleDeletePost = async () => {
    if (!data?.auth) return
    _deletePost({
      variables: { id },
      context: { auth: data.auth },
    })
    setPosts((posts) => {
      return posts.filter((post) => {
        return post.id !== id
      })
    })
  }

  const handleUpdatePost = () => {
    setPost!({
      content: content || '',
      title: title || '',
      id,
    })
    router.push('mutate-post')
  }

  return (
    <S.Main>
      <strong>{title}</strong>
      <br />
      <IoMdClose onClick={handleDeletePost} />
      <BsPen
        className='IconPen'
        onClick={handleUpdatePost}
      />
      {content}
    </S.Main>
  )
}
