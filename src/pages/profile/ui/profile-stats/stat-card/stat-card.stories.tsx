import type { Meta, StoryObj } from '@storybook/nextjs'
import { FileTextIcon } from 'lucide-react'

import { StatCard } from './stat-card'

const meta: Meta<typeof StatCard> = {
  title: 'pages/profile/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/profile/prompts',
    count: 25,
    label: 'Промптов',
    icon: <FileTextIcon className="size-4" />,
  },
}
