
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {Main as Button} from '../../BUTTON/button_one/S.button_one'
export const Main = styled.form`
  ${({ theme }) => css`
    ${Button} {
      margin-top: 2rem;
    }
  `}
`
export const ContainerButton = styled.div``
export const ErrorMessage = styled.p`
  ${({theme}) => css`
    background: ${theme.colors.warning};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`
export const SwitchMode = styled.div<{isNewAccount: boolean}>`
  ${({theme, isNewAccount}) => css`
    margin-bottom: ${theme.spacings.medium};
    gap: 2rem;
    display: flex;
    justify-content: center;
    ${isNewAccount ? css`
      .button-create-account {
        transition: all 0ms !important;
        filter: brightness(200%) !important;
        -ms-filter: brightness(200%) !important;
        -webkit-filter: brightness(200%) !important;
        &:hover {
          filter: brightness(200%) !important;
          -ms-filter: brightness(200%) !important;
          -webkit-filter: brightness(200%) !important;
        }
    ` :  css`
      .button-login-account {
        transition: all 0ms !important;
        filter: brightness(200%) !important;
        -ms-filter: brightness(200%) !important;
        -webkit-filter: brightness(200%) !important;
        &:hover {
          filter: brightness(200%) !important;
          -ms-filter: brightness(200%) !important;
          -webkit-filter: brightness(200%) !important;
        }
      }

    `}
  `}
`
