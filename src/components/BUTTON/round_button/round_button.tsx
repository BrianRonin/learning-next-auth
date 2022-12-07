import {
  MouseEventHandler,
  ReactNode,
} from 'react'
import { inject_styles } from '../../../types/emotion'
import * as S from './S.round_button'

export type roundButtonProps = {
  children: ReactNode
  styles?: inject_styles
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const RoundButton = ({
  children,
  styles,
  onClick,
}: roundButtonProps) => {
  return (
    <S.Main onClick={onClick} styles={styles}>
      {children}
    </S.Main>
  )
}
