import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: ${theme.spacings.xlarge};
    width: 100vw;
    height: 7vh;
    min-height: 3rem;
    background: ${theme.colors.darkBg};
    @media ${theme.media.lMedium} {
      height: 5vh;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    --icon-size: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 80rem;
    gap: 3rem;
    margin: 0 auto;

    a {
      font-size: ${theme.fonts.sizes.medium};
      color: ${theme.colors.bg};
      display: block;
      white-space: pre-wrap;
      text-decoration: none;
      &:hover {
        color: ${theme.colors.primary} !important;
      }
    }

    .logout {
      position: absolute;
      right: 3rem;
      display: flex;
      &:hover {
        cursor: pointer;
      }
    }

    svg {
      font-size: ${theme.fonts.sizes.large};
      justify-content: center;
      align-items: center;
      &:hover {
        color: ${theme.colors.primary} !important;
      }
    }

    @media ${theme.media.lMedium} {
      a {
        font-size: ${theme.fonts.sizes.normal};
      }
      gap: 2rem;
      svg {
        font-size: ${theme.fonts.sizes.medium};
      }
    }
    @media ${theme.media.lSmall} {
      a {
        font-size: ${theme.fonts.sizes.xsmall};
      }
      gap: 1rem;
      svg {
        font-size: ${theme.fonts.sizes.normal};
      }
    }
  `}
`
