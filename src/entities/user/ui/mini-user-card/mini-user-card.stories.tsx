import type { Meta, StoryObj } from '@storybook/nextjs'

import { MiniUserCard } from './mini-user-card'

const meta = {
  title: 'entities/user/MiniUserCard',
  component: MiniUserCard,
  argTypes: {},
  args: {},
} satisfies Meta<typeof MiniUserCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: {
      name: 'John Doe',
    },
  },
}
