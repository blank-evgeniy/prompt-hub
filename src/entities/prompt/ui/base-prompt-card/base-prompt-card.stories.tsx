import type { Meta, StoryObj } from '@storybook/nextjs'

import { Button } from '@/shared/ui/button'

import { BasePromptCard } from './base-prompt-card'

const meta = {
  title: 'entities/prompt/BasePromptCard',
  component: BasePromptCard,
  argTypes: {},
  args: {},
} satisfies Meta<typeof BasePromptCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: {
      id: '1',
      title: 'Generate a creative story idea',
      category: 'CODE',
      content:
        'Create a unique and engaging story idea that captivates readers and sparks their imagination. The story should have a compelling plot, interesting characters, and a memorable setting. Consider incorporating elements of mystery, adventure, or romance to make the story more appealing.',
    },
  },
}

export const LongContent: Story = {
  args: {
    data: {
      id: '1',
      title: 'Generate a creative story idea',
      category: 'CODE',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos debitis beatae eveniet doloremque sint iste non fuga voluptas tempora harum, culpa necessitatibus labore et impedit molestiae provident dolores ab nihil.'.repeat(
          10
        ),
    },
  },
}

export const WithActions: Story = {
  args: {
    data: {
      id: '1',
      title: 'Generate a creative story idea',
      category: 'CODE',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    actionsSlot: (
      <>
        <Button variant={'accent'}>Action 1</Button>
        <Button>Action 2</Button>
      </>
    ),
  },
}
