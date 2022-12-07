import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  ButtonWithIcon,
  buttonWithIconProps,
} from './button_with_icon'
import { mock_button_with_icon } from './M.button_with_icon'

export default {
  title: 'components/button/button with icon',
  component: ButtonWithIcon,
  args: mock_button_with_icon,
} as Meta

export const Template: Story<buttonWithIconProps> =
  (args) => <ButtonWithIcon {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
