import type { Meta, StoryObj } from '@storybook/nextjs'

import { HomePage } from './home-page'

const meta = {
  title: 'pages/home/HomePage',
  component: HomePage,
  argTypes: {},
  args: {},
} satisfies Meta<typeof HomePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
