import { useSession } from 'next-auth/react'
import { ButtonOne } from '../../components/BUTTON/button_one/button_one'
import { S_ContainerOne } from '../../components/ONLY_STYLES/CONTAINERS/container_one/S.container_one'
import { Base } from '../Base/Base'
import * as S from './S.Home'

export type homeProps = {
  //
}

export const Home = () => {
  const { data, status } = useSession()

  return (
    <Base>
      <S.Main>
        <S_ContainerOne>
          <h1>
            {status === 'loading'
              ? 'loading'
              : null}
            {status === 'authenticated'
              ? 'name: ' + data.user?.name
              : null}
            {status === 'unauthenticated'
              ? 'você não esta logado'
              : null}
          </h1>
          <ButtonOne>Create Post</ButtonOne>
        </S_ContainerOne>
      </S.Main>
    </Base>
  )
}
