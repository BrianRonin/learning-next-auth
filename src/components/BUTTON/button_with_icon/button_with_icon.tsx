import * as S from './S.button_with_icon'
import { IconType } from 'react-icons'
import { inject_styles } from '../../../types/emotion'

export type buttonWithIconStyles = {
  Main?: inject_styles
  Button?: inject_styles
  Content?: inject_styles
  Text?: inject_styles
}

export type buttonWithIconProps = {
  text: string
  Icon: IconType | any
  styles?: buttonWithIconStyles
}

export const ButtonWithIcon = ({
  text,
  Icon,
  styles,
}: buttonWithIconProps) => {
  return (
    <S.Main styles={styles?.Main}>
      <S.Button styles={styles?.Button}>
        <S.Content styles={styles?.Content}>
          <S.IconContainer>
            <Icon />
          </S.IconContainer>
          <S.TextContainer styles={styles?.Text}>
            <span>{text}</span>
          </S.TextContainer>
        </S.Content>
      </S.Button>
    </S.Main>
  )
}
