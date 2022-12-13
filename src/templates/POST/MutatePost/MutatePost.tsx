import { FormPost } from '../../../components/FORM/form_post/form_post'
import { Base } from '../../Base/Base'
import * as S from './S.MutatePost'
import {
  createPost,
  updatePost,
} from '../../../api/graphql/Post/mutations'
import { useSession } from 'next-auth/react'
import { useMutation } from '@apollo/client'
import { useContext, useEffect } from 'react'
import { C_Post } from '../../../contexts/updatePost/updatePost'
import { Post } from '../../../types/post'

export const MutatePost = () => {
  const [_createPost] = useMutation(createPost)
  const [_updatePost] = useMutation(updatePost)
  const { data } = useSession()
  const { post, setPost } = useContext(C_Post)

  if (!data?.auth) return null

  const handleSubmit = (post: Post) => {
    console.log(post)
    if (post.id) return handleUpdatePost(post)
    return handleSavePost(post)
  }

  const handleSavePost = async (post: Post) => {
    try {
      _createPost({
        variables: post,
        context: { auth: data.auth },
      })
    } catch (e) {
      console.log(e)
    }
  }

  const handleUpdatePost = async (post: Post) => {
    _updatePost({
      variables: post,
      context: { auth: data.auth },
    })
    setPost!({})
  }
  return (
    <Base>
      <S.Main>
        <FormPost
          onSave={handleSubmit}
          post={post && post}
        />
      </S.Main>
    </Base>
  )
}
