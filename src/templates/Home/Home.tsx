import { ButtonOne } from '../../components/BUTTON/button_one/button_one'
import { S_ContainerOne } from '../../components/ONLY_STYLES/CONTAINERS/container_one/S.container_one'
import { Base } from '../Base/Base'
import * as S from './S.Home'

export type homeProps = {
  //
}

export const Home = () => {
  return (
    <Base>
      <S.Main>
        <S_ContainerOne>
          <ButtonOne>Create Post</ButtonOne>
        </S_ContainerOne>
      </S.Main>
    </Base>
  )
}
