import type { Meta, StoryObj } from '@storybook/nextjs'

import { LightRays } from './light-rays'

const meta = {
  title: 'ui-kit/LightRays',
  component: LightRays,
  argTypes: {},
  args: {
    count: 5,
    speed: 20,
    color: 'rgba(0, 255, 0, 1)',
  },
} satisfies Meta<typeof LightRays>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
