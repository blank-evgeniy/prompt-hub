import type { Meta, StoryObj } from '@storybook/nextjs'

import { EditAvatarForm } from './edit-avatar-form'

const meta = {
  title: 'pages/edit-profile/EditAvatarForm',
  component: EditAvatarForm,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-3xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EditAvatarForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: null,
  },
}
