import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { S_ContainerOne } from './S.container_one'

export default {
  title:
    'components/only_styles/containers/container one',
} as Meta

const _S_ContainerOne = styled.div`
  ${({ theme }) => css`
    ${S_ContainerOne};
    border: solid 4px black;
    text-align: center;
  `}
`

export const Template: Story = () => (
  <_S_ContainerOne>
    <h1>conteudo</h1>
  </_S_ContainerOne>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'dark',
  },
}
