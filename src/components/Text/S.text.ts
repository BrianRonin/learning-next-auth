import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};
    color: ${theme.colors.text};
  `}
`
