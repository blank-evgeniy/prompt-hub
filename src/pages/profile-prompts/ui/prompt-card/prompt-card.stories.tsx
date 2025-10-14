import type { Meta, StoryObj } from '@storybook/nextjs'

import { ProfilePromptsProvider } from '../../model'
import { PromptCard } from './prompt-card'

const meta = {
  title: 'pages/profile-prompts/PromptCard',
  component: PromptCard,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <ProfilePromptsProvider>
        <Story />
      </ProfilePromptsProvider>
    ),
  ],
} satisfies Meta<typeof PromptCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: {
      id: '1',
      title: 'Sample Prompt',
      content: 'This is a sample prompt.',
      category: 'TEXT',
    },
  },
}
