import type { Meta, StoryObj } from '@storybook/nextjs'

import { PromptList } from './prompt-list'

const meta = {
  title: 'pages/home/PromptList',
  component: PromptList,
  argTypes: {},
  args: {},
} satisfies Meta<typeof PromptList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
