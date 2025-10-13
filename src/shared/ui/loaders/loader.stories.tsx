import type { Meta, StoryObj } from '@storybook/nextjs'

import { ButtonLoader } from './button-loader'

const meta = {
  title: 'ui-kit/ButtonLoader',
  component: ButtonLoader,
  argTypes: {},
  args: {},
} satisfies Meta<typeof ButtonLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
