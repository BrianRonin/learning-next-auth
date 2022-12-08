import { ReactNode } from 'react'
import { Nav } from '../../components/NAV/nav/nav'
import { ToggleTheme } from '../../components/TOGGLE/toggle_theme/toggle_theme'
import * as S from './S.Base'

export type baseProps = {
  children?: ReactNode
}

export const Base = ({ children }: baseProps) => {
  return (
    <S.Main>
      <Nav />
      <ToggleTheme />
      {children}
    </S.Main>
  )
}
