import { FormPost } from '../../../components/FORM/form_post/form_post'
import { Base } from '../../Base/Base'
import * as S from './S.MutatePost'
import {
  createPost,
  updatePost,
} from '../../../api/graphql/Post/mutations'
import { useSession } from 'next-auth/react'
import { useMutation } from '@apollo/client'
import { getToken } from '../../../api/graphql/apollo_client'
import { useRouter } from 'next/router'

export type Post = {
  title: string
  content: string
}

export type mutatePostProps = {
  post: Post
}

export const MutatePost = ({
  post,
}: mutatePostProps) => {
  const [_createPost] = useMutation(createPost)
  const [_updatePost] = useMutation(updatePost)
  const { data } = useSession()
  const router = useRouter()
  if (!data?.auth) return null

  const handleSubmit = async (post: Post) => {
    if (router.query.id)
      return handleUpdatePost(post)
    return handleSavePost(post)
  }

  const handleSavePost = async (post: Post) => {
    _createPost({
      variables: post,
      context: {
        auth: await getToken(data.auth),
      },
    })
  }

  const handleUpdatePost = async (post: Post) => {
    _updatePost({
      variables: post,
      context: {
        auth: await getToken(data.auth),
      },
    })
  }
  return (
    <Base>
      <S.Main>
        <FormPost
          onSave={handleSubmit}
          post={post}
        />
      </S.Main>
    </Base>
  )
}
