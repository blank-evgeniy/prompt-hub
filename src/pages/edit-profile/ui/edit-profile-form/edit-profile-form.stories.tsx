import type { Meta, StoryObj } from '@storybook/nextjs'

import { EditProfileForm } from './edit-profile-form'

const meta = {
  title: 'pages/edit-profile/EditProfileForm',
  component: EditProfileForm,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-3xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EditProfileForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    user: {
      username: 'john_doe',
      bio: 'This is my bio',
    },
  },
}
