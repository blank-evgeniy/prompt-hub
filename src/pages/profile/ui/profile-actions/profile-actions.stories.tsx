import type { Meta, StoryObj } from '@storybook/nextjs'

import { ProfileActions } from './profile-actions'

const meta: Meta<typeof ProfileActions> = {
  title: 'pages/profile/ProfileActions',
  component: ProfileActions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    profile: {
      id: '1',
      username: 'john_doe',
      bio: 'Frontend разработчик',
      avatarUrl: null,
      createdAt: '2023-01-15T10:30:00Z',
      updatedAt: '2024-01-15T10:30:00Z',
      followersCount: 42,
      followingCount: 18,
      promptsCount: 25,
      isFollowed: null,
    },
  },
}
