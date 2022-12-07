import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { inputOneProps } from './input_one'

const onInputError = (
  theme: Theme,
  errorMessage: string,
) => css`
  border: ${theme.spacings.xxtiny} solid
    ${theme.colors.warning};
  box-shadow: 0 0 ${theme.spacings.xtiny} 0
    ${theme.colors.warning};

  &:focus {
    border: ${theme.spacings.xxtiny} solid
      ${theme.colors.warning};
    box-shadow: 0 0 ${theme.spacings.xtiny} 0
      ${theme.colors.warning};
  }

  ${!!errorMessage &&
  css`
    &:focus
      + ${Label},
      &:not(:placeholder-shown)
      + ${Label} {
      color: ${theme.colors.white};
      background: ${theme.colors.warning};
    }
  `}
`

export const Main = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    box-sizing: border-box;
  `}
`

export const inputContainer = styled.div<{
  errorMesage: string
  hasIcon: boolean
}>`
  ${({ theme, errorMesage, hasIcon }) => css`
    position: relative;
    display: flex;

    > svg {
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 13px;
      width: 2.5rem;
      height: 2.5rem;
      color: ${theme.colors.gray6};
      z-index: ${theme.layers.layer1};
      ${!!errorMesage &&
      css`
        color: ${theme.colors.warning};
      `}
    }

    *:focus ~ svg {
      color: ${theme.colors.primary};
      ${!!errorMesage && css`
        color: ${theme.colors.warning};
      `}
    }
    *:disabled ~ svg {
      color: ${theme.colors.gray3};
    }

    ${!hasIcon && css`
      > svg {
        pointer-events: all;
        &:hover {
          z-index: ${theme.layers.layer2};
          cursor: pointer;
          color: ${theme.colors.warning};
        }
      }
    `}
  `}
`

type StyledInputType = Pick<
  inputOneProps,
  'errorMessage' | 'as' | 'type'
>

export const Input = styled.input<StyledInputType>`
  ${({ theme, errorMessage, as }) => css`
    border: 1px solid ${theme.colors.gray3};
    width: 100%;
    font-size: ${theme.fonts.sizes.normal};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    background: ${theme.colors.white};
    padding-right: 4rem;
    border-radius: ${theme.spacings.tiny};
    outline: none;

    &::placeholder {
      visibility: hidden;
      opacity: 0;
    }

    &:focus {
      border: ${theme.spacings.xxtiny} solid
        ${theme.colors.primary};
      box-shadow: 0 0 ${theme.spacings.xtiny} 0
        ${theme.colors.primary};
      background: ${theme.colors.white};
    }

    &:focus
      + ${Label},
      &:not(:placeholder-shown)
      + ${Label},
      &:-webkit-autofill
      + ${Label} {
      top: 0;
      transform: translate(0, -50%);
      font-size: ${theme.fonts.sizes.xsmall};
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      filter: none;

      ${as === 'textarea' &&
      css`
        transform: translate(0, -50%);
      `}
    }

    &:disabled {
      background: ${theme.colors.gray1};
      color: ${theme.colors.gray5};
    }
    &:disabled + ${Label} {
      background: ${theme.colors.gray5};
      color: ${theme.colors.gray2};
    }

    ${as === 'textarea' &&
    css`
      min-height: ${theme.frameSizes.xsmall};
      padding-right: ${theme.spacings.xsmall};
    `}

    ${!!errorMessage &&
    onInputError(theme, errorMessage)}
  `}
`

export const Label = styled.label<{
  element: string
}>`
  ${({ theme, element }) => css`
    display: inline;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: ${theme.spacings.xsmall};
    font-size: ${theme.fonts.sizes.small};
    height: ${theme.fonts.sizes.small};
    transition: ${theme.transitions.fast};
    background: ${theme.colors.white};
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    line-height: 1;
    pointer-events: none;
    z-index: ${theme.layers.layer1};
    color: ${theme.colors.gray6};
    border-radius: ${theme.spacings.tiny};
    ${element === 'textarea' &&
    css`
      top: ${theme.spacings.large};
      transform: translate(0, -50%);
    `}
  `}
`
export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warning};
    margin: ${theme.spacings.xxsmall} 0
      ${theme.spacings.large};
  `}
`
