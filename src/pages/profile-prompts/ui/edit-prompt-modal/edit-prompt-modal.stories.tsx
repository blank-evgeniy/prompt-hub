import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/internal/test'

import { EditPromptModal } from './edit-prompt-modal'

const meta = {
  title: 'pages/profile-prompts/EditPromptModal',
  component: EditPromptModal,
  argTypes: {},
  args: {
    onClose: fn,
  },
} satisfies Meta<typeof EditPromptModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    prompt: {
      category: 'TEXT',
      content: 'This is a sample prompt content.',
      id: '1',
      title: 'Sample Prompt Title',
    },
  },
}
