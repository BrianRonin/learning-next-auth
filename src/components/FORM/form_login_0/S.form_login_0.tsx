
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.form`
  ${({ theme }) => css`
    //
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
