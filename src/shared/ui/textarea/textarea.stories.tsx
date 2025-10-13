import type { Meta, StoryObj } from '@storybook/nextjs'

import { Textarea } from './textarea'

const meta = {
  title: 'ui-kit/Textarea',
  component: Textarea,
  argTypes: {},
  args: {
    placeholder: 'Placeholder text...',
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithMaxLength: Story = {
  args: {
    maxLength: 100,
  },
}
