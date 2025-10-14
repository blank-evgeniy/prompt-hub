import type { Meta, StoryObj } from '@storybook/nextjs'

import { AuthLayout } from '@/layouts/auth-layout'

import { LoginPage } from './login-page'

const meta = {
  title: 'pages/login/LoginPage',
  component: LoginPage,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <AuthLayout>
        <Story />
      </AuthLayout>
    ),
  ],
} satisfies Meta<typeof LoginPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
