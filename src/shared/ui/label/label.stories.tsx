import type { Meta, StoryObj } from '@storybook/nextjs'

import { Label } from './label'

const meta = {
  title: 'ui-kit/Label',
  component: Label,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}
