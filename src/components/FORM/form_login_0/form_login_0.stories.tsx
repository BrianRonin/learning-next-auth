import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { S_ContainerOne } from '../../ONLY_STYLES/CONTAINERS/container_one/S.container_one'
import {
  FormLogin0,
  formLogin0Props,
} from './form_login_0'
import { mock_form_login_0 } from './M.form_login_0'

export default {
  title: 'components/form/form login one',
  component: FormLogin0,
  args: mock_form_login_0,
} as Meta

export const Template: Story<formLogin0Props> = (
  args,
) => (
  <S_ContainerOne>
    <FormLogin0 {...args} />
  </S_ContainerOne>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
  },
}
