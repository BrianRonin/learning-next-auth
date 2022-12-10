import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    border: solid ${theme.spacings.medium} ${theme.colors.darkBg};
    padding: ${theme.spacings.huge};
    max-width: 100%;
    overflow-y: auto;
    overflow-wrap: break-word;
    position: relative;
    svg {
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-size: ${theme.fonts.sizes.medium};
      &:hover {
        color: ${theme.colors.primary};
        cursor: pointer;
      }
    }
    .IconPen {
      top: 4rem;
    }

  `}
`
