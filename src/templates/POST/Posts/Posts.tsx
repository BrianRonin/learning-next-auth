import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Card } from '../../../components/card/card'
import { Grid } from '../../../components/grid/grid'
import { Base } from '../../Base/Base'
import { IoMdAdd } from 'react-icons/io'
import * as S from './S.Posts'
import Link from 'next/link'

export type postsProps = {
  posts: {
    conteudo: string
    titulo: string
    id: number
  }[]
}

export const Posts = ({ posts }: postsProps) => {
  const router = useRouter()
  const { status } = useSession()
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
          {posts.map(
            ({ conteudo, id, titulo }, i) => (
              <Card
                key={i}
                id={id}
                content={conteudo}
                title={titulo}
              />
            ),
          )}
          <Link href={'/mutate-post'}>
            <S.CreatePost>
              <IoMdAdd />
            </S.CreatePost>
          </Link>
        </Grid>
      </S.Main>
    </Base>
  )
}
