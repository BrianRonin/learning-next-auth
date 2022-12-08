import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Base } from '../Base/Base'
import * as S from './S.Posts'

export type postsProps = {
  //
}

export const Posts = () => {
  const router = useRouter()
  const { status } = useSession()
  if (status === 'loading') return <Base />
  if (status === 'unauthenticated')
    router.push({
      pathname: '/login',
      query: { redirect: router.pathname },
    })

  return (
    <Base>
      <S.Main></S.Main>
    </Base>
  )
}
