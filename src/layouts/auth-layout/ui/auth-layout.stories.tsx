import type { Meta, StoryObj } from '@storybook/nextjs'

import { AuthLayout } from './auth-layout'

const meta = {
  title: 'layout/auth/AuthLayout',
  component: AuthLayout,
  argTypes: {},
  args: {},
} satisfies Meta<typeof AuthLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Auth Layout Content',
  },
}
