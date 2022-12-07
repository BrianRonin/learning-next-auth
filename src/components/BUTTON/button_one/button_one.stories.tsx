import { CgAddR } from 'react-icons/cg'
import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  ButtonOne,
  buttonOneProps,
} from './button_one'
import { mock_button_one } from './M.button_one'

export default {
  title: 'components/button/button one',
  component: ButtonOne,
  args: mock_button_one,
} as Meta

export const Template: Story<buttonOneProps> = (
  args,
) => <ButtonOne {...args} />

export const WithIcon: Story<buttonOneProps> = (
  args,
) => <ButtonOne {...args} icon={<CgAddR />} />

Template.parameters = {
  layout: 'fullscren',
  background: {
    disable: true,
  },
}
