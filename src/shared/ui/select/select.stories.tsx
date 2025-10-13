import type { Meta, StoryObj } from '@storybook/nextjs'

import { Select } from './select'

const meta = {
  title: 'ui-kit/Select',
  component: Select,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}
