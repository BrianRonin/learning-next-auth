import { Meta, Story } from '@storybook/react/types-6-0'
import { Card, cardProps } from './card'
import { mock_card } from './M.card'

export default {
  title: 'components/card',
  component: Card,
  args: mock_card
} as Meta

 export const Template: Story<cardProps > = (args) => <Card {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
