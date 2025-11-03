import type { Meta, StoryObj } from '@storybook/nextjs'

import { BaseLayout } from '@/layouts/base-layout'

import { EditProfilePage } from './edit-profile-page'

const meta = {
  title: 'pages/edit-profile/EditProfilePage',
  component: EditProfilePage,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <BaseLayout>
        <Story />
      </BaseLayout>
    ),
  ],
} satisfies Meta<typeof EditProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
