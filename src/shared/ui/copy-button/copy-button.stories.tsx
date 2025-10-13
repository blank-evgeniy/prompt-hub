import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'

import { CopyButton } from './copy-button'

const meta = {
  title: 'ui-kit/CopyButton',
  component: CopyButton,
  argTypes: {},
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof CopyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'one piece is real',
  },
}
