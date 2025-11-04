import type { Meta, StoryObj } from '@storybook/nextjs'

import { Avatar } from './avatar'

const meta = {
  title: 'ui-kit/Avatar',
  component: Avatar,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
