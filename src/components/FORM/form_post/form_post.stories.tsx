import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  FormPost,
  formPostProps,
} from './form_post'
import { mock_form_post } from './M.form_post'

export default {
  title: 'components/form/form post',
  component: FormPost,
  args: mock_form_post,
} as Meta

export const Template: Story<formPostProps> = (
  args,
) => (
  <div style={{ padding: '3rem' }}>
    <FormPost {...args} />
  </div>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light',
  },
}
