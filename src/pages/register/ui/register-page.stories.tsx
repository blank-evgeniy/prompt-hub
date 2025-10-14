import type { Meta, StoryObj } from '@storybook/nextjs'

import { AuthLayout } from '@/layouts/auth-layout'

import { RegisterPage } from './register-page'

const meta = {
  title: 'pages/register/RegisterPage',
  component: RegisterPage,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <AuthLayout>
        <Story />
      </AuthLayout>
    ),
  ],
} satisfies Meta<typeof RegisterPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
