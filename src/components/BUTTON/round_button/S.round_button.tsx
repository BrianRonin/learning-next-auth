import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { inject_styles } from '../../../types/emotion'

export const Main = styled.div<{
  styles?: inject_styles
}>`
  ${({ theme, styles }) => css`
    --background: ${theme.colors.primary};
    --scale-icon: 1.5;
    --size-container: 5rem;

    display: flex;
    background: var(--background);
    justify-content: center;
    max-width: var(--size-container);
    max-height: var(--size-container);
    border-radius: 50%;
    svg {
      scale: var(--scale-icon);
      height: var(--size-container);
      width: var(--size-container);
    }
    ${styles && styles(theme)}
  `}
`
