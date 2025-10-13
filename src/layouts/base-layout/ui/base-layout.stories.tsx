import type { Meta, StoryObj } from '@storybook/nextjs'
import { http, HttpResponse } from 'msw'

import { BaseLayout } from './base-layout'

const meta = {
  title: 'layout/base/BaseLayout',
  component: BaseLayout,
  argTypes: {
    children: { control: 'text' },
  },
  args: {},
} satisfies Meta<typeof BaseLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Base Layout Content',
  },
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
  args: {
    children: 'Base Layout Content',
  },
}
