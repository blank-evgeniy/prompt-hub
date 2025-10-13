import type { Meta, StoryObj } from '@storybook/nextjs'

import { AuthLinks } from './auth-links'

const meta = {
  title: 'layout/base/AuthLinks',
  component: AuthLinks,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof AuthLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
