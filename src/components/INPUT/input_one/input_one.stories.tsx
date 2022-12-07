import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  InputOne,
  inputOneProps,
} from './input_one'
import { mock_input_one } from './M.input_one'
import { AiOutlineMail } from 'react-icons/ai'

export default {
  title: 'components/input/input one',
  component: InputOne,
  args: mock_input_one,
  layout: 'fullscren',
  backgrounds: {
    disable: true,
  },
  decorators: [
    (Story: Story) => {
      return (
        <div style={{ padding: '3.2rem' }}>
          <Story />
        </div>
      )
    },
  ],
} as Meta

export const Template: Story<inputOneProps> = (
  args,
) => {
  return <InputOne {...args} />
}

export const OnError: Story<inputOneProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <InputOne {...args} />
    </div>
  )
}

OnError.args = {
  errorMessage: 'Something went wrong, Sorry!',
  value: 'Something you typed',
  icon: <AiOutlineMail />,
}

export const WithText: Story<inputOneProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <InputOne {...args} />
    </div>
  )
}

WithText.args = {
  value: 'Something you typed',
}

export const WithIcon: Story<inputOneProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <InputOne {...args} />
    </div>
  )
}

WithIcon.args = {
  value: 'Something you typed',
  icon: <AiOutlineMail />,
}

export const Disabled: Story<inputOneProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <InputOne {...args} />
    </div>
  )
}

Disabled.args = {
  value: 'Something you typed',
  icon: <AiOutlineMail />,
  disabled: true,
}

export const TextArea: Story<inputOneProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <InputOne {...args} />
    </div>
  )
}

TextArea.args = {
  value: 'Something you typed',
  icon: <AiOutlineMail />,
  as: 'textarea',
}
