import type { Meta, StoryObj } from '@storybook/nextjs'
import { http, HttpResponse } from 'msw'

import { Header } from './header'

const meta = {
  title: 'layout/base/Header',
  component: Header,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>

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
