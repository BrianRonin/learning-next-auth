import { Meta, Story } from '@storybook/react/types-6-0'
import { Login, loginProps } from './Login'
import { mock_login } from './M.Login'

export default {
  title: 'components/login',
  component: Login,
  args: mock_login
} as Meta

 export const Template: Story<loginProps > = (args) => <Login {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
