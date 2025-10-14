import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/internal/test'

import { CreatePromptForm } from './create-prompt-form'

const meta = {
  title: 'pages/create-prompt/CreatePromptForm',
  component: CreatePromptForm,
  argTypes: {},
  args: {},
} satisfies Meta<typeof CreatePromptForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSuccess: fn,
  },
}
