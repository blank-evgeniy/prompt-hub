import type { Meta, StoryObj } from '@storybook/nextjs'

import { BaseLayout } from '@/layouts/base-layout'

import { ProfilePromptsPage } from './profile-prompts-page'

const meta = {
  title: 'pages/profile-prompts/ProfilePromptsPage',
  component: ProfilePromptsPage,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <BaseLayout>
        <Story />
      </BaseLayout>
    ),
  ],
} satisfies Meta<typeof ProfilePromptsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
