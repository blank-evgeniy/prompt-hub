import type { Meta, StoryObj } from '@storybook/nextjs'

import { UserCard } from './user-card'

const meta = {
  title: 'entities/user/UserCard',
  component: UserCard,
  argTypes: {},
  args: {},
} satisfies Meta<typeof UserCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: {
      name: 'John Doe',
      description: 'Enthusiastic writer and storyteller.',
    },
  },
}

export const WithoutDescription: Story = {
  args: {
    data: {
      name: 'John Doe',
    },
  },
}
