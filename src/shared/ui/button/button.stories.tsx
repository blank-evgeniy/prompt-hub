import type { Meta, StoryObj } from '@storybook/nextjs'
import { HeartIcon } from 'lucide-react'
import { fn } from 'storybook/test'

import { Button } from './button'

const meta = {
  title: 'ui-kit/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost', 'link', 'destructive'],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Button
        <HeartIcon />
      </>
    ),
  },
}

export const IconOnly: Story = {
  args: {
    children: <HeartIcon />,
  },
}
