import * as S from './S.card'
import { IoMdClose } from 'react-icons/io'
import { BsPen } from 'react-icons/bs'
import { deletePost } from '../../api/graphql/Post/mutations'
import { useSession } from 'next-auth/react'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { C_Post } from './../../contexts/updatePost/updatePost'
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
  const [deleted, setDeleted] = useState(false)
  const router = useRouter()
  const [_deletePost] = useMutation(deletePost)
  const handleDeletePost = async (id: number) => {
    if (!data?.auth) return
    _deletePost({
      variables: { id },
    })
    setDeleted(true)
  }
  const { setPost } = useContext(C_Post)
  const handleUpdatePost = () => {
    setPost!({
      content: content || '',
      title: title || '',
      id: id.toString(),
    })
    router.push('mutate-post')
  }

  if (deleted) return null
  return (
    <S.Main>
      <strong>{title}</strong>
      <br />
      <IoMdClose
        onClick={() => handleDeletePost(id)}
      />
      <BsPen
        className='IconPen'
        onClick={handleUpdatePost}
      />
      {content}
    </S.Main>
  )
}
