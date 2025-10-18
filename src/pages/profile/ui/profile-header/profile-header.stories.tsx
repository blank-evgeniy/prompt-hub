import type { Meta, StoryObj } from '@storybook/nextjs'

import { ProfileHeader } from './profile-header'

const meta: Meta<typeof ProfileHeader> = {
  title: 'pages/profile/ProfileHeader',
  component: ProfileHeader,
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
      bio: 'Frontend разработчик с опытом в React и TypeScript. Люблю создавать красивые и функциональные интерфейсы.',
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
