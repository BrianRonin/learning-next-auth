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
  className?: string
}

export const ButtonOne = ({
  children,
  disabled,
  onClick,
  icon,
  className,
}: buttonOneProps) => {
  return (
    <S.Main
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
      {!!icon && icon}
    </S.Main>
  )
}
