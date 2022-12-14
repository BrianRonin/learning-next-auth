import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    position: fixed;
    right: 5px;
    top: 7rem;
    display: flex;
    &:hover {
      cursor: pointer;
    }
    @media ${theme.media.lMedium} {
      top: 5.5rem;
    }
  `}
`
