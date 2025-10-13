import type { Meta, StoryObj } from '@storybook/nextjs'

import { FieldMessage } from './field-message'

const meta = {
  title: 'ui-kit/FieldMessage',
  component: FieldMessage,
  argTypes: {},
  args: {},
} satisfies Meta<typeof FieldMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Field Message',
  },
}
