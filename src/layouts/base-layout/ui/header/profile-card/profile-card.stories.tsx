import type { Meta, StoryObj } from '@storybook/nextjs'

import { ProfileCard } from './profile-card'

const meta = {
  title: 'layout/base/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: {
      username: 'testuser',
    },
  },
}
