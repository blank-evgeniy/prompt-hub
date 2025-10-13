import type { Meta, StoryObj } from '@storybook/nextjs'

import { Card, CardContent, CardFooter, CardHeader } from './card'

const meta = {
  title: 'ui-kit/Card',
  component: Card,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-80',
    children: (
      <>
        <CardHeader>Card Header</CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </>
    ),
  },
}
