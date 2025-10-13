import type { Meta, StoryObj } from '@storybook/nextjs'

import { Container } from './container'

const meta = {
  title: 'ui-kit/Container',
  component: Container,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Container Content',
  },
}
