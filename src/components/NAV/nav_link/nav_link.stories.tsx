import { Meta, Story } from '@storybook/react/types-6-0'
import { NavLink, navLinkProps } from './nav_link'
import { mock_nav_link } from './M.nav_link'

export default {
  title: 'components/nav/nav link',
  component: NavLink,
  args: mock_nav_link
} as Meta

 export const Template: Story<navLinkProps > = (args) => <NavLink {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
