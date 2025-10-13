import type { Meta, StoryObj } from '@storybook/nextjs'

import { Typography } from './typography'

const meta = {
  title: 'ui-kit/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'paragraph', 'description', 'label'],
    },
    as: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    children: 'Sample Text',
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
