import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const S_ContainerOne = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 8rem auto;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xlarge};
  `}
`
