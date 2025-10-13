import type { Meta, StoryObj } from '@storybook/nextjs'
import { UserIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const meta = {
  title: 'ui-kit/Avatar',
  component: Avatar,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <AvatarFallback>TE</AvatarFallback>
        <AvatarImage src="/images/mock.jpg" alt="Avatar" />
      </>
    ),
  },
}

export const FallbackText: Story = {
  args: {
    children: <AvatarFallback>SB</AvatarFallback>,
  },
}

export const FallbackIcon: Story = {
  args: {
    children: (
      <AvatarFallback>
        <UserIcon />
      </AvatarFallback>
    ),
  },
}
