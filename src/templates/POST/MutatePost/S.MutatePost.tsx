
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {Main as Form} from '../../../components/FORM/form_post/S.form_post'
export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    ${Form} {
      width: 80vw;
      max-width: 120rem;
    }
  `}
`
