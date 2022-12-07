import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { ToggleTheme } from './toggle_theme'
import { mock_toggle_theme } from './M.toggle_theme'

export default {
  title: 'components/toggle theme',
  component: ToggleTheme,
  // args: mock_toggle_theme
} as Meta

export const Template: Story = (args) => (
  <ToggleTheme />
)

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
