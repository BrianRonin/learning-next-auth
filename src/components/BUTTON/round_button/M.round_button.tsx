import { roundButtonProps } from './round_button'
import { IoIosHelp } from 'react-icons/io'
import { css } from '@emotion/react'
export const mock_round_button = {
  children: <IoIosHelp color='black' />,
  styles: (theme) => css`
    --background: gold;
  `,
} as roundButtonProps
