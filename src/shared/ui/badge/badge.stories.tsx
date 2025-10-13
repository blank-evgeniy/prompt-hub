import type { Meta, StoryObj } from '@storybook/nextjs'

import { Badge } from './badge'

const meta = {
  title: 'ui-kit/Badge',
  component: Badge,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}
