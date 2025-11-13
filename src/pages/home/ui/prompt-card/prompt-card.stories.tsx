import type { Meta, StoryObj } from '@storybook/nextjs'

import { PromptCard } from './prompt-card'

const meta = {
  title: 'pages/home/PromptCard',
  component: PromptCard,
  argTypes: {},
  args: {},
} satisfies Meta<typeof PromptCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    prompt: {
      id: '1',
      title: 'Generate a creative story idea',
      category: 'CODE',
      content:
        'Create a unique and engaging story idea that captivates readers and sparks their imagination. The story should have a compelling plot, interesting characters, and a memorable setting. Consider incorporating elements of mystery, adventure, or romance to make the story more appealing.',
    },
    author: {
      name: 'John Doe',
      description: 'Enthusiastic writer and storyteller.',
    },
    isLiked: false,
  },
}
