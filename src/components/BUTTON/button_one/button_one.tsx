import {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import * as S from './S.button_one'

export type buttonOneProps = {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
  icon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonOne = ({
  children,
  disabled,
  onClick,
  icon,
}: buttonOneProps) => {
  return (
    <S.Main disabled={disabled} onClick={onClick}>
      {children}
      {!!icon && icon}
    </S.Main>
  )
}
