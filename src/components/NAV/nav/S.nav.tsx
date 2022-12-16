import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.nav`
  ${({ theme }) => css`
    z-index: ${theme.layers.layer2};
    display: flex;
    position: fixed;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: ${theme.spacings.xlarge};
    width: 100vw;
    height: 7vh;
    min-height: 3rem;
    background-color: fade(${theme.colors.darkBg}, 50%);
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    @media ${theme.media.lMedium} {
      height: 5vh;
    }
    .toggle-theme-inside {
      position: absolute;
      top: 3px;
      right: 22rem;
      display: flex;
      gap: 3rem;
      &:hover {
        cursor: pointer;
      }
      @media ${theme.media.lMedium}{
        display: none;
      }
    }
    .toggle-theme-outside {
      position: fixed;
      right: 3rem;
      top: 7rem;
      display: flex;
      &:hover {
        cursor: pointer;
      }
      @media ${theme.media.gMedium} {
        display: none;
      }
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
      color: ${theme.colors.text};
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
      gap: 3rem;
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
        font-size: ${theme.fonts.sizes.normal};
      }
      gap: 1rem;
      svg {
        font-size: ${theme.fonts.sizes.medium};
      }
    }
  `}
`
