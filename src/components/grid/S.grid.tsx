import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(25rem, 1fr)
    );
    padding: ${theme.spacings.medium};
    gap: ${theme.spacings.medium};
    justify-content: center;
  `}
`
