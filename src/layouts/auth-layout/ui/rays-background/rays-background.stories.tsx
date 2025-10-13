import type { Meta, StoryObj } from '@storybook/nextjs'

import { RaysBackground } from './rays-background'

const meta = {
  title: 'layout/auth/RaysBackground',
  component: RaysBackground,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof RaysBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
