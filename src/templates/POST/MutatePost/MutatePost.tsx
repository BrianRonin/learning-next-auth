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
import { C_Post } from '../../../contexts/posts/posts'
import { Post } from '../../../types/post'
import { useRouter } from 'next/router'
import { useAuthenticated } from '../../../hooks/useAuthenticated'

export const MutatePost = () => {
  const router = useRouter()
  const { data, status } = useSession()
  const [_createPost] =
    useMutation<{
      create_post_item: Post
    }>(createPost)

  const [_updatePost] =
    useMutation<{ update_post_item: Post }>(
      updatePost,
    )

  const { post, setPost, setPosts } =
    useContext(C_Post)

  useEffect(() => {
    if (status === 'unauthenticated')
      router.push('/login', {
        query: { redirect: router.pathname },
      })
  }, [status])

  if (status === 'loading') return <Base />
  if (status !== 'authenticated' || !data?.auth) {
    return null
  }

  const handleSubmit = (post: Post) => {
    if (post.id > 0) return handleUpdatePost(post)
    return handleSavePost(post)
  }

  const handleSavePost = async (post: Post) => {
    try {
      console.log('post: ' + post)
      const { data: newPost } = await _createPost(
        {
          variables: {
            title: post.title,
            content: post.content,
          },
          context: { auth: data.auth },
        },
      )
      if (!newPost?.create_post_item) return
      setPosts((posts) => [
        ...posts,
        newPost.create_post_item,
      ])
    } catch (e) {
      console.log(e)
    }
  }

  const handleUpdatePost = async (post: Post) => {
    const { data: newPost } = await _updatePost({
      variables: post,
      context: { auth: data.auth },
    })
    if (newPost?.update_post_item) {
      setPosts((posts) => {
        const newPosts: Post[] = []
        posts.map((post) => {
          if (
            post.id ===
            newPost.update_post_item.id
          ) {
            newPosts.push(
              newPost.update_post_item,
            )
          } else {
            newPosts.push(post)
          }
        })
        return newPosts
      })
      setPost({})
    }
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
