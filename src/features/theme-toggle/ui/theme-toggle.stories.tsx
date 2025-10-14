import type { Meta, StoryObj } from '@storybook/nextjs'

import { ThemeToggle } from './theme-toggle'

const meta = {
  title: 'features/theme-toggle/ThemeToggle',
  component: ThemeToggle,
  argTypes: {},
  args: {},
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
