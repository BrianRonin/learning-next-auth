import { Meta, Story } from '@storybook/react/types-6-0'
import { Grid, gridProps } from './grid'
import { mock_grid } from './M.grid'

export default {
  title: 'components/grid',
  component: Grid,
  args: mock_grid
} as Meta

 export const Template: Story<gridProps > = (args) => <Grid {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
