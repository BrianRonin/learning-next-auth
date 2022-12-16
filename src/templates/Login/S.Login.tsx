
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { S_ContainerOne } from '../../components/ONLY_STYLES/CONTAINERS/container_one/S.container_one'

export const Main = styled.div`
  ${({ theme }) => css`
  `}
`

export const FormLogin = styled(S_ContainerOne)(css`
  margin-bottom: 0;
`)

export const ContainerProviders = styled(S_ContainerOne)(css`
  margin: 0 auto;
  justify-content: center;
  display: flex;
`)
