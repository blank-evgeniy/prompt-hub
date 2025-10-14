import type { Meta, StoryObj } from '@storybook/nextjs'

import { Loader } from './loader'

const meta = {
  title: 'ui-kit/Loader',
  component: Loader,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
