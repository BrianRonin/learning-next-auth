import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Toggle, toggleProps } from './toggle'
import { mock_toggle } from './M.toggle'

export default {
  title: 'components/toggle',
  component: Toggle,
  args: mock_toggle,
} as Meta

export const Template: Story<toggleProps> = (
  args,
) => (
  <div>
    <Toggle {...args} />
  </div>
)

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
