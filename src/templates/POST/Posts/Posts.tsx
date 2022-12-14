import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Card } from '../../../components/card/card'
import { Grid } from '../../../components/grid/grid'
import { Base } from '../../Base/Base'
import { IoMdAdd } from 'react-icons/io'
import * as S from './S.Posts'
import Link from 'next/link'
import {
  useContext,
  useEffect,
  useState,
} from 'react'
import { C_Post } from '../../../contexts/Posts/Posts'

export const Posts = () => {
  const router = useRouter()
  const { status } = useSession()
  const { posts, setPost } = useContext(C_Post)

  if (status === 'loading') return <Base />
  if (status === 'unauthenticated') {
    router.push({
      pathname: '/login',
      query: { redirect: router.pathname },
    })
    return null
  }

  return (
    <Base>
      <S.Main>
        <Grid>
          {posts &&
            posts.map(
              ({ content, id, title }, i) => (
                <Card
                  key={i}
                  id={id}
                  content={content}
                  title={title}
                />
              ),
            )}
          <Link
            href={'/mutate-post'}
            onClick={() => setPost({})}
          >
            <S.CreatePost>
              <IoMdAdd />
            </S.CreatePost>
          </Link>
        </Grid>
      </S.Main>
    </Base>
  )
}
