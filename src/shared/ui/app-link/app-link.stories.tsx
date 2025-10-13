import type { Meta, StoryObj } from '@storybook/nextjs'

import { AppLink } from './app-link'

const meta = {
  title: 'ui-kit/AppLink',
  component: AppLink,
  argTypes: {},
  args: {},
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/',
    children: 'App Link',
  },
}
