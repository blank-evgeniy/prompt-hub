import type { Meta, StoryObj } from '@storybook/nextjs'

import { PromptFilters } from './prompt-filters'

const meta = {
  title: 'pages/home/PromptFilters',
  component: PromptFilters,
  argTypes: {},
  args: {},
} satisfies Meta<typeof PromptFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    filters: {
      category: null,
      sortBy: 'createdAt',
      order: 'asc',
    },
    onFiltersChange: () => {},
  },
}
