import type { Meta, StoryObj } from '@storybook/nextjs'

import { EditProfileContent } from './edit-profile-content'

const meta = {
  title: 'pages/edit-profile/EditProfileContent',
  component: EditProfileContent,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-3xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EditProfileContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
