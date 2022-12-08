import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Nav } from './nav'
import { mock_nav } from './M.nav'

export default {
  title: 'components/nav/nav',
  component: Nav,
} as Meta

export const Template: Story = (args) => (
  <Nav {...args} />
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light',
  },
}
