import type { Meta, StoryObj } from '@storybook/nextjs'

import { Card, CardContent } from '../card'
import { Typography } from '../typography'
import { ListState, ListStateProps } from './list-state'

type Item = { id: number; label: string }

const ListStateItem = (props: ListStateProps<Item>) => (
  <ListState<Item> {...props} />
)

const meta = {
  title: 'ui-kit/ListState',
  component: ListStateItem,
  argTypes: {
    isLoading: { control: 'boolean' },
    isError: { control: 'boolean' },
    items: { control: 'object' },
    containerClassName: { control: false },
    children: { control: false },
    errorSlot: { control: false },
    loadingSlot: { control: false },
  },
  args: {
    containerClassName: 'flex flex-col gap-2',
  },
} satisfies Meta<typeof ListStateItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { id: 1, label: 'Первый' },
      { id: 2, label: 'Второй' },
      { id: 3, label: 'Третий' },
    ],
    isLoading: false,
    isError: false,
    children: (item: Item) => (
      <Card key={item.id}>
        <CardContent>
          <Typography>{item.label}</Typography>
        </CardContent>
      </Card>
    ),
  },
}
