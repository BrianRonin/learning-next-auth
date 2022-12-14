import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { toggleProps } from './toggle'

export const Main = styled.div`
  ${({ theme }) => css`
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    width: 5rem;
    height: 2.5rem;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;
    background: ${theme.colors.primary};
    &:checked + ${Slider} {
    },
    &:focus + ${Slider} {
      box-shadow: 0 1 2px
        ${theme.colors.secondary};
    }
    &:checked + ${Slider}:before {
      transform: translateX(1.9rem);
      background: ${theme.colors.primary};
    }
  `}
`

export const Slider = styled.span`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 300ms ease-in-out;
    border-radius: 2rem;
    background: ${theme.colors.text};
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
    box-shadow: 0 0 2px ${theme.colors.primary};
    &:before {
      content: '';
      position: absolute;
      height: 2.1rem;
      width: 2.1rem;
      left: 0.4rem;
      bottom: 0.2rem;
      background: ${theme.colors.primary};
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  `}
`
