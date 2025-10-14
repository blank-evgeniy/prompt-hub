import type { Meta, StoryObj } from '@storybook/nextjs'

import { BaseLayout } from '@/layouts/base-layout'

import { CreatePromptPage } from './create-prompt-page'

const meta = {
  title: 'pages/create-prompt/CreatePromptPage',
  component: CreatePromptPage,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <BaseLayout>
        <Story />
      </BaseLayout>
    ),
  ],
} satisfies Meta<typeof CreatePromptPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
