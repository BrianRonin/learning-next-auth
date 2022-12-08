import { Meta, Story } from '@storybook/react/types-6-0'
import { Posts, postsProps } from './Posts'
import { mock_posts } from './M.Posts'

export default {
  title: 'components/posts',
  component: Posts,
  args: mock_posts
} as Meta

 export const Template: Story<postsProps > = (args) => <Posts {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
