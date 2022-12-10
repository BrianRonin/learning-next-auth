import * as S from './S.grid'
import { ReactNode } from 'react'

export type gridProps = {
  children: ReactNode
}

export const Grid = ({ children }: gridProps) => {
  return <S.Main>{children}</S.Main>
}
