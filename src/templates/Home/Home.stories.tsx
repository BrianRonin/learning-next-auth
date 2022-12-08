import { Meta, Story } from '@storybook/react/types-6-0'
import { Home, homeProps } from './Home'
import { mock_home } from './M.Home'

export default {
  title: 'components/home',
  component: Home,
  args: mock_home
} as Meta

 export const Template: Story<homeProps > = (args) => <Home {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
