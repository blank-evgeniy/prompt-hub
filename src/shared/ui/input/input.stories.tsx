import type { Meta, StoryObj } from '@storybook/nextjs'

import { Input } from './input'

const meta = {
  title: 'ui-kit/Input',
  component: Input,
  argTypes: {},
  args: {
    disabled: false,
    label: 'Input Label',
    message: 'Field message',
    'aria-invalid': false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
}
