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
      <NextNProgress
        color={theme.colors.primary}
        options={{
          showSpinner: false,
        }}
        height={1}
      />
      <Nav />
      <S.Content>{children}</S.Content>
    </S.Main>
  )
}
