import * as S from './S.button_with_icon'
import { IconType } from 'react-icons'

export type buttonWithIconProps = {
  text: string
  Icon: IconType | any
  onClick: <t>(e: t) => any
  // styles?: buttonWithIconStyles
}

export const ButtonWithIcon = ({
  text,
  Icon,
  onClick,
}: // styles,
buttonWithIconProps) => {
  return (
    <S.Main onClick={onClick}>
      <S.Button>
        <S.Content>
          <S.IconContainer>
            <Icon />
          </S.IconContainer>
          <S.TextContainer>
            <span>{text}</span>
          </S.TextContainer>
        </S.Content>
      </S.Button>
    </S.Main>
  )
}
