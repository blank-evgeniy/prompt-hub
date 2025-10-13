import type { Meta, StoryObj } from '@storybook/nextjs'
import { http, HttpResponse } from 'msw'

import { HeaderActions } from './header-actions'

const meta = {
  title: 'layout/base/HeaderActions',
  component: HeaderActions,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof HeaderActions>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const NoUser: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('*/profile/me', () => {
          return HttpResponse.json(null, { status: 401 })
        }),
      ],
    },
  },
}
