import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { Nav } from '../../components/NAV/nav/nav'
import * as S from './S.Base'
import { useTheme } from '@emotion/react'
import NextNProgress from 'nextjs-progressbar'

export type baseProps = {
  children?: ReactNode
}

export const Base = ({ children }: baseProps) => {
  const theme = useTheme()
  return (
    <S.Main>
      <Nav />
      <S.Content>{children}</S.Content>
    </S.Main>
  )
}
