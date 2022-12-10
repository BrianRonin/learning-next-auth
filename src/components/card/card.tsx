import * as S from './S.card'
import { IoMdClose } from 'react-icons/io'
import { BsPen } from 'react-icons/bs'
import { Client } from '../../api/graphql/apollo_client'
import { deletePost as _deletePost } from '../../api/graphql/Post/mutations'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
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
  const deletePost = (id: number) => {
    Client(
      {
        mutate: {
          mutation: _deletePost,
          variables: { id },
        },
      },
      data?.auth,
    )
    setDeleted(true)
  }

  if (deleted) return null
  return (
    <S.Main>
      <strong>{title}</strong>
      <br />
      <IoMdClose onClick={() => deletePost(id)} />
      <BsPen
        className='IconPen'
        onClick={() =>
          router.push('/mutate-post', {
            query: { title, content },
          })
        }
      />
      {content}
    </S.Main>
  )
}
