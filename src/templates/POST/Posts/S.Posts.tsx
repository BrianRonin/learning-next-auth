
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    //
  `}
`
export const CreatePost = styled.div`
  ${({theme}) => css`
    border: solid ${theme.spacings.medium} ${theme.colors.darkBg};
    padding: ${theme.spacings.huge};
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      cursor: pointer;
    }
    svg {
      position: absolute;
      font-size: ${theme.fonts.sizes.medium};
      scale: 3;

    }
    .IconPen {
      top: 4rem;
    }
  `}
`
