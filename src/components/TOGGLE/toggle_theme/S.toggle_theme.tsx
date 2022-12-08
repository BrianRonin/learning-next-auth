import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 8rem;
    right: 2rem;
    z-index: 2;
  `}
`
