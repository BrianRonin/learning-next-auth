
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    overflow-x: hidden;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 10rem;
  `}
`
